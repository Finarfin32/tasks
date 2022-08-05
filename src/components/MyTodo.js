import React, { useState } from "react";
import "./MyTodo.css";
import TextField from "@mui/material/TextField";
import TodoTile from "./MyTodoTile";
import List from "./List";

function Todo() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="container">
      <h2>MY TODOS</h2>
      <div className="searchbar">
        <h1>Wyszukiwarka</h1>
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <TodoTile inputText={inputText} />
    </div>
  );
}

export default Todo;
