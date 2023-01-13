import React from "react";

export default function Modal({
  setModal,
  modal,
  id,
  addTask,
  taskObj,
  setTaskObj,
}) {
  const dn = modal ? "block" : "none";

  return (
    <div className="modal" style={{ display: dn }} onClick={setModal}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div>
          <h2>Засах</h2>
        </div>
        <div className="w-100">
          <hr />
          <div className="form">
            <div className="mb-3">
              <label class="form-label" for="type">
                Хийгдэх ажил
              </label>
              <input
                id="task"
                name="task"
                className="form-control"
                type="text"
                value={taskObj.task}
                onChange={(e) => {
                  setTaskObj({ ...taskObj, task: e.target.value });
                }}
                placeholder="task oruulna uu"
              />
            </div>
            <div className="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value={taskObj.isImportant}
                  name="isImportant"
                  id="isImportant"
                  onChange={() => setTaskObj({ ...taskObj, isImportant: true })}
                />
                <label class="form-check-label" for="isImportant">
                  Чухал уу!
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label class="form-label" for="type">
                Төрөл
              </label>
              <select
                name="type"
                value={taskObj.type}
                onChange={(e) =>
                  setTaskObj({ ...taskObj, type: e.target.value })
                }
                defaultValue="0"
                className="form-control"
              >
                <option value="0">--Сонгох--</option>
                <option value="1">Ажил</option>
                <option value="2">Хувийн</option>
              </select>
            </div>
            <input type="hidden" value={taskObj.id} />
            <button className="btn btn-primary" onClick={addTask}>
              +Add
            </button>
          </div>
          <hr />
        </div>
        <div className="btn btn-light" onClick={setModal}>
          Хаах
        </div>
      </div>
    </div>
  );
}
