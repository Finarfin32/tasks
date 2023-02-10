import { React } from "react";
import { useState } from "react";
// import { useState } from "react";
import "./App.css";
// import Flex from "./components/Flex";
// import Todo from "./components/MyTodo";
// import SimpleAccordion from "./components/AccordionMUI";
// import Check from "./components/Check";
// import Color from "./components/Color";
// import TextField from "@mui/material/TextField";
// import List from "./components/List.js";
// import TodoTile from "./components/MyTodoTile";
// import Box from "./components/Box";
// import DataGrid2 from "./components/DataGrid";
import CommentForm from "./components/CommentForm";
function App() {
  // const [inputText, setInputText] = useState("");
  // let inputHandler = (e) => {
  //   var lowerCase = e.target.value.toLowerCase();
  //   setInputText(lowerCase);
  // };

  return (
    <div className="App">
      <header className="App-header">
        {/* <DataGrid2 /> */}
        {/* <Box></Box> */}
        {/* <SimpleAccordion /> */}
        {/* <Flex /> */}
        {/* <Check /> */}
        {/* <Color /> */}
        <CommentForm />
        {/* <Todo /> */}
      </header>
    </div>
  );
}

export default App;
