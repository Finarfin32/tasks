import { React } from "react";
import "./App.css";
import Flex from "./components/Flex";
// import Fetch from "./components/Fetch";
// import SimpleAccordion from "./components/AccordionMUI";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Fetch /> */}
        {/* <SimpleAccordion /> */}
        <Flex />
      </header>
    </div>
  );
}

export default App;
