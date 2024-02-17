import { List } from "@mui/material";
import React from "react";
import Todo from "./Todo.tsx";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store.ts";

function TodoList() {
  const todoList = useSelector((state: RootState) => state.list.list);
  return (
    <div className="list-container">
      <List className="todo-list">
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </List>
    </div>
  );
}

export default TodoList;
