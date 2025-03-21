import React from 'react'
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export const Tasks = () => {
    const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(false);


  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, completed: false }]);
    saveToLS();
    setTodo("");
  };

  const toggleFinish = () => {
    setShowFinished(!showFinished);
  };

  const handleCheckbox = (e) => {
    // e.preventDefault();
    let id = e.target.name;
    let updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
  );

  setTodos(updatedTodos); // Update state
  saveToLS(updatedTodos);
  };

  const handleDeleteall = () => {
    let newTodos = [];
    setTodos(newTodos);
    saveToLS(todos);
  };

  const handleEdit = (e, id) => {
    let index = todos.findIndex((i) => {
      return i.id === id;
    });
    setTodo(todos[index].todo);
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLS(todos);
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveToLS(todos);
  };
  return (
    <div >
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl w-full p-5 bg-violet-100 min-h-[80vh] md:w-[35%] overflow-y-auto relative flex flex-col">
        <h1 className="font-bold text-center text-3xl p-2">
          TaskTrack - Manage your todos
        </h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Add a Todo</h2>
          <div className="flex">
            <input
              value={todo}
              type="text"
              placeholder="Add your task..."
              className="w-full rounded-full px-5 py-1 bg-white"
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              onClick={() => handleAdd()}
              disabled={todo.length <= 1}
              className="bg-violet-800 mx-2 rounded-full hover:bg-violet-950 cursor-pointer p-4 py-2 text-sm font-bold text-white disabled:bg-violet-500"
            >
              ADD
            </button>
          </div>
        </div>

        <div className="flex flex-row">
          <input
            className="my-4 cursor-pointer"
            id="show"
            type="checkbox"
            onChange={() => toggleFinish()}
          />
          <label className="mx-2 mt-2" htmlFor="show">
            Show Finished
          </label>
        </div>
        <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div>
        <h2 className="text-2xl font-bold">Your Todos</h2>
        <div className="todos mt-2 flex flex-col">
          {todos.length == 0 && (
            <div className="text-gray-500"> No Todos To Be Completed</div>
          )}
          {todos.map((item) => {
            return (
              (!showFinished || item.completed) && (
                <div key={item.id} className={""}>
                  <div className="todo flex flex-row justify-between m-2 ">
                    <div className="flex gap-2 ">
                      <input
                        className="mb-2 cursor-pointer"
                        name={item.id}
                        onChange={ handleCheckbox}
                        type="checkbox"
                        checked={item.completed}
                      />
                      <div className={item.completed?"line-through":""}>
                        {item.todo}{" "}
                      </div>
                    </div>
                    <div className="buttons flex">
                      <button
                        onClick={(e) => handleEdit(e, item.id)}
                        className="bg-violet-800 mx-2  rounded-xl cursor-pointer hover:bg-violet-950  p-3  text-sm font-bold text-white "
                      >
                        <FaEdit />{" "}
                      </button>
                      <button
                        onClick={(e) => handleDelete(e, item.id)}
                        className="bg-violet-800 mx-2 rounded-xl cursor-pointer hover:bg-violet-950  p-3 text-sm font-bold text-white"
                      >
                        <AiFillDelete />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
        {todos.length > 0 && (
          <button
            className="bg-red-800 text-white rounded-md w-full mt-auto p-2 cursor-pointer font-bold hover:bg-red-900  "
            onClick={() => handleDeleteall()}
          >
            DELETE ALL
          </button>
        )}
      </div>
    </div>
  )
}

