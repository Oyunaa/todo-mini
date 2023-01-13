import React, { useState } from "react";

import "./App.css";

import Modal from "./components/Modal";
import TodoList from "./components/TodoList";

function App() {
  const init = {
    id: "",
    task: "",
    type: 0,
    isImportant: false,
    isDone: false,
  };

  const [tasks, setTasks] = useState([]);
  const [ID, setId] = useState("0");
  const [modal, setModal] = useState(false);
  const [doneTotal, setDoneTotal] = useState(0);

  const [taskObj, setTaskObj] = useState(init);

  const addTask = (e) => {
    console.log(taskObj);

    // if (ID !== "0") {
    //   newArr.map((e) => {
    //     if (e.id === ID) {
    //       // e.title = task;
    //     }
    //     return e;
    //   });
    // } else {

    // }
    //edit hiideg hesgiig comment bolgoson
    const newArr = [...tasks];
    newArr.push({ ...taskObj, id: createId() });
    setTasks(newArr);

    // setTasks([...tasks, { ...taskObj, id: createId() }]);

    setModal(false);
    setTaskObj(init);
  };

  const onDoneTask = (id) => {
    const objList = tasks.map((val) => {
      if (val.id === id) {
        val.isDone = !val.isDone;
        if (val.isDone) {
          setDoneTotal(doneTotal + 1);
        } else {
          setDoneTotal(doneTotal - 1);
        }
      }
      return val;
    });

    setTasks(objList);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleEdit = (id, task, isDone, type, isImportant) => {
    if (!isDone) {
      setTaskObj({ id, task, isDone, type, isImportant });
      setModal(true);
    }
  };

  const handleDelete = (id) => {
    const newArr = tasks.filter((e) => e.id !== id);
    setTasks(newArr);
    doneTotalTask(newArr);
  };

  const doneTotalTask = (data) => {
    const lenArr = data.filter((e) => e.isDone == true);
    setDoneTotal(lenArr.length);
  };

  function createId() {
    let abc = "ABCDEFJHJKLMNO";

    let num = "1234567890";

    console.log(Math.random(1 * 10));

    let newStr =
      abc.split("")[Math.floor(Math.random() * 10 + 1)] +
      abc.split("")[Math.floor(Math.random() * 10 + 1)] +
      abc.split("")[Math.floor(Math.random() * 10 + 1)];

    let newNumber =
      num.split("")[Math.floor(Math.random() * 10)] +
      "" +
      num.split("")[Math.floor(Math.random() * 10)] +
      "" +
      num.split("")[Math.floor(Math.random() * 10)];

    console.log(newStr + newNumber);

    return newStr + newNumber;
  }

  return (
    <div className="container">
      {/* {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(!isLoggedIn)} />
      ) : ( */}
      <div>
        <div className="row mt-4">
          <div className="col-md-4">
            <h1>Todo List</h1>
            <div className="d-flex gap-3 w-100 justify-content-between align-items-center">
              <div> Total {tasks.length}</div>
              <div> Done {doneTotal}</div>
              <button className="btn btn-primary" onClick={handleModal}>
                +Add Task
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <TodoList
            tasks={tasks}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            onDoneTask={onDoneTask}
          />

          <Modal
            modal={modal}
            setModal={handleModal}
            id={ID}
            addTask={addTask}
            taskObj={taskObj}
            setTaskObj={setTaskObj}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
