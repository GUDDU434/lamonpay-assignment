import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Task.css";
import TaskCard from "../components/TaskCard";
import Pagination from "../components/Pagination";
import axios from "axios";
import TaskModal from "../components/TaskModal";
import { apiUrl } from "../utils/contants";

const Task = () => {
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [taskData, setTaskData] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    fetchTask(page);
  }, [page]);

  const fetchTask = async (pageNo = 1) => {
    try {
      const { data } = await axios.get(`${apiUrl}/fetchAllTasks`, {
        params: { page: pageNo, limit: 5 },
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      setTotalPages(Math.floor(data?.total / 5));
      setTaskData(data?.tasks);
    } catch (error) {
      alert(error.response.data.message || "Something went wrong");
      console.log(error);
    }
  };

  const handleAddTask = async (newTask) => {
    console.log(newTask);
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      console.log(token);
      axios
        .post(`${apiUrl}/add`, newTask, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
        .then(() => {
          fetchTask();
          setIsOpen((prev) => !prev);
        })
        .catch((error) => {
          alert(error?.response?.data?.message || "Something went wrong");
          console.log(error);
        });
    } catch (error) {
      alert(error?.response?.data?.message || "Something went wrong");
      console.log(error);
    }
    setIsOpen((prev) => !prev);
  };

  const editTask = (id, editData) => {
    try {
      axios
        .put(`${apiUrl}/updateTaskById/${id}`, editData, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
        .then(() => {
          fetchTask();
        })
        .catch((error) => {
          alert(error?.response?.data?.message || "Something went wrong");
          console.log(error);
        });
    } catch (error) {
      alert(error.response.data.message || "Something went wrong");
      console.log(error);
    }
  };

  const deleteTask = (id) => {
    try {
      axios
        .delete(`${apiUrl}/deleteTaskById/${id}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
        .then(() => {
          fetchTask();
        })
        .catch((error) => {
          alert(error?.response?.data?.message || "Something went wrong");
          console.log(error);
        });
    } catch (error) {
      alert(error.response.data.message || "Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="task-container">
      <h1 className="task-heading">Task Management</h1>
      <div className="add-task-button-container">
        <button className="add-task-button" onClick={onClose}>
          <FaPlus />
          <p>Add Taks</p>
        </button>
      </div>
      <div className="table-header">
        <div className="sl-no">No</div>
        <div className="date-time">Date & Time</div>
        <div className="task">Task</div>
        <div className="discription">Description</div>
        <div className="actions">Action</div>
      </div>
      {taskData?.length === 0 ? (
        <h1 className="no-task">No tasks available</h1>
      ) : (
        taskData?.map((item, index) => (
          <TaskCard
            key={index}
            data={item}
            i={index}
            handleEdit={editTask}
            handleDelete={deleteTask}
          />
        ))
      )}
      {/* pagination*/}
      {totalPages > 0 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}

      <TaskModal isOpen={isOpen} onClose={onClose} onAddTask={handleAddTask} />
    </div>
  );
};

export default Task;
