import { React } from "react";
import "./App.css";
// import Flex from "./components/Flex";
// import Fetch from "./components/Fetch";
// import SimpleAccordion from "./components/AccordionMUI";
// import Check from "./components/Check";
// import Color from "./components/Color";
// import TextField from "@mui/material/TextField";
// import List from "./components/List.js";
import Box from "./components/Box";
function App() {
  // const [inputText, setInputText] = useState("");
  // let inputHandler = (e) => {
  //   var lowerCase = e.target.value.toLowerCase();
  //   setInputText(lowerCase);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <Box />

        {/* <Fetch /> */}
        {/* <SimpleAccordion /> */}
        {/* <Flex /> */}
        {/* <Check /> */}
        {/* <Color /> */}

        {/* <div className="main">
          <h1>Wyszukiwarka</h1>
          <div className="search">
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Search"
            />
          </div>
          <List input={inputText} /> */}
        {/* </div> */}
      </header>
    </div>
  );
}

export default App;
