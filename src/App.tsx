import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm.tsx";
import TodoList from "./components/TodoList.tsx";

const LOCAL_STORAGE_KEY = "todo-list";

function App() {
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h2" className="title">
        React Todo
      </Typography>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
