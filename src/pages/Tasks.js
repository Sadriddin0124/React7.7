import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTaskModal from "../components/AddTaskModal";
import { deleteTask, openModal } from "../features/tasks/tasksSlice";
const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [edit, setEdit] = useState('')
  const dispatch = useDispatch();
  const editTask =(item)=> {
    setEdit(item)
    dispatch(openModal())
  }
  return (
    <div className="container">
      <AddTaskModal edit={edit} setEdit={setEdit}/>
      <div className="row mt-5">
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Open</h1>
            </div>
            <div className="card-body">
              {tasks
                .filter((item) => item.category === "open")
                .map((item, index) => {
                  return (
                    <div className="w-100 d-flex justify-content-between" key={index}>
                      <h2>{item.title}</h2>
                      <div>
                        <button className="btn btn-info mx-2" onClick={()=>editTask(item)}>edit</button>
                        <button className="btn btn-danger" onClick={()=>dispatch(deleteTask(item))}>delete</button>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button
                className="btn btn-success"
                onClick={() => dispatch(openModal())}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Pending</h1>
            </div>
            <div className="card-body">
              {tasks
                .filter((item) => item.category === "pending")
                .map((item, index) => {
                  return (
                    <div className="w-100 d-flex justify-content-between" key={index}>
                      <h2>{item.title}</h2>
                      <div>
                        <button className="btn btn-info mx-2" onClick={()=>editTask(item)}>edit</button>
                        <button className="btn btn-danger" onClick={()=>dispatch(deleteTask(item))}>delete</button>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button
                className="btn btn-success"
                onClick={() => dispatch(openModal())}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Inproge</h1>
            </div>
            <div className="card-body">
              {tasks
                .filter((item) => item.category === "inproge")
                .map((item, index) => {
                  return (
                    <div className="w-100 d-flex justify-content-between" key={index}>
                      <h2>{item.title}</h2>
                      <div>
                        <button className="btn btn-info mx-2" onClick={()=>editTask(item)}>edit</button>
                        <button className="btn btn-danger" onClick={()=>dispatch(deleteTask(item))}>delete</button>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button
                className="btn btn-success"
                onClick={() => dispatch(openModal())}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Progress</h1>
            </div>
            <div className="card-body">
              {tasks
                .filter((item) => item.category === "progress")
                .map((item, index) => {
                  return (
                    <div className="w-100 d-flex justify-content-between" key={index}>
                      <h2>{item.title}</h2>
                      <div>
                        <button className="btn btn-info mx-2" onClick={()=>editTask(item)}>edit</button>
                        <button className="btn btn-danger" onClick={()=>dispatch(deleteTask(item))}>delete</button>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button
                className="btn btn-success"
                onClick={() => dispatch(openModal())}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
