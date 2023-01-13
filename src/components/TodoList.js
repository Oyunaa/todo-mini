import React from "react";

export default function TodoList({
  tasks,
  onDoneTask,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="col-md-4">
      {tasks.map((e) => (
        <div className="row">
          <div className="col-md-4 d-flex">
            <input
              type="checkbox"
              checked={e.isDone}
              onChange={() => onDoneTask(e.id)}
            />
            <span>{e.task}</span>
          </div>
          <div className="col-md-2">{e.type === "1" ? "Work" : "Personal"}</div>
          <div className="col-md-2">{e.isImportant ? "Тийм" : "Үгүй"}</div>
          <div className="col-md-4">
            <button
              className="btn badge bg-warning"
              onClick={() =>
                handleEdit(e.id, e.task, e.isDone, e.type, e.isImportant)
              }
            >
              Edit
            </button>
            <button
              className="btn badge bg-danger"
              onClick={() => handleDelete(e.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
