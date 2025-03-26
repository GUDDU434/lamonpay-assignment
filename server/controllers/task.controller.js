const Task = require("../models/task.model.js");

// Create Task
module.exports.CreateTask = async (req, res) => {
  try {
    const newTask = new Task({ ...req.body, user: req.user.userId });
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get All Tasks
module.exports.GetAllTasks = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    let tasks = await Task.find({ user: req.user.userId })
      .sort({
        createdAt: 1,
      })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Task.countDocuments({ user: req.user.userId });

    res.status(200).json({ tasks, total: total });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Get Single Task
module.exports.GetTaskById = async (req, res) => {
  try {
    let tasks = [];
    tasks = await redisClient.get(process.env.REDIS_KEY);
    tasks = tasks ? JSON.parse(tasks) : [];

    const task = tasks.find((task) => task._id.toString() === req.params.id);

    if (!task) {
      tasks = await Task.findById(req.params.id);
    }

    if (!task || task.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update Task
module.exports.UpdateTask = async (req, res) => {
  try {
    let tasks = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!tasks) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete Task
module.exports.DeleteTask = async (req, res) => {
  try {
    let tasks;
    tasks = await Task.findByIdAndDelete(req.params.id);
    if (!tasks) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
