import { React, useState } from "react";
import "./App.css";
import Button1 from "./components/button1";
import Button2 from "./components/button2";
import Button3 from "./components/Button3";
import Button4 from "./components/Button4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Liczba {count}</p>
        <Button1 count={count} setCount={setCount} />
        <Button2 count={count} setCount={setCount} />
        <Button3 count={count} setCount={setCount} />
        <Button4 count={count} setCount={setCount} />
      </header>
    </div>
  );
}

export default App;
