import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import TaskModal from "./TaskModal";

const TaskCard = ({ data, i, handleEdit, handleDelete }) => {
  const [openAction, setOpenAction] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [editId, setEditId] = React.useState(null);

  const onClose = () => setOpenModal((prev) => !prev);

  const editTask = (editData) => {
    handleEdit(editId, editData);
    setOpenAction(false);
  };

  const deleteTask = (id) => {
    handleDelete(id);
    setOpenAction(false);
  };
  return (
    <div className="table-data">
      <div className="sl-no">{i + 1}</div>
      <div className="date-time">
        {new Date(data?.date).toLocaleDateString("en-IN")}{" "}
        {new Date(data?.date).toLocaleTimeString("en-IN")}
      </div>
      <div className="task">{data?.task}</div>
      <div className="discription">
        {data?.description?.length > 100
          ? data?.description.slice(0, 100) + "..."
          : data?.description}
      </div>
      <div className="actions">
        {!openAction ? (
          <BsThreeDotsVertical
            className="action-item"
            onClick={() => {
              setEditId(data?._id);
              setOpenAction((prev) => !prev);
            }}
          />
        ) : (
          <div className="action-menu">
            <div
              className="action-item"
              onClick={() => setOpenModal((prev) => !prev)}
            >
              Edit
            </div>
            <div className="action-item" onClick={() => deleteTask(data?._id)}>
              Delete
            </div>
          </div>
        )}
      </div>

      <TaskModal
        isOpen={openModal}
        onClose={onClose}
        onAddTask={editTask}
        isEdit={data}
      />
    </div>
  );
};

export default TaskCard;
