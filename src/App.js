import { React } from "react";
//BUTTON
// import { useState } from "react";
// import Button1 from "./components/button1";
// import Button2 from "./components/button2";
// import Button3 from "./components/Button3";
// import Button4 from "./components/Button4";
import "./App.css";
// HOOK FORM
// import TestForm from "./components/ReactHookForm";
//FORM WITHOUT HOOK
// import Form from "./components/FormWithoutHook";

import MuiDatePicker from "./components/MuiDatePicker";

function App() {
  //BUTTON
  // const [count, setCount] = useState(0);

  // FORM

  return (
    <div className="App">
      <header className="App-header">
        {/* <Form /> */}

        {/* BUTTON */}
        {/* <div className="Test1">
          <p>Liczba {count}</p>
          <Button1 count={count} setCount={setCount} />
          <Button2 count={count} setCount={setCount} />
          <Button3 count={count} setCount={setCount} />
          <Button4 count={count} setCount={setCount} />
        </div> */}

        {/* HOOKFORM */}
        {/* <div className="Test2">
          <TestForm />
        </div> */}
        <MuiDatePicker />
      </header>
    </div>
  );
}

export default App;
