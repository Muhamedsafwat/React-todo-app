import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  

  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtred, setFiltred] = useState([]);

  useEffect( () => {
    filterHandler();
  },
  [todos, status])
  // functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFiltred(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFiltred(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFiltred(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        status={status}
        setStatus={setStatus}
      />
      <TodoList 
      todos={todos}
      setTodos={setTodos}
      filtred={filtred}
    
 />
    </div>
  );
}

export default App;
