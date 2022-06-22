import { React } from "react";
import "../App.css";

function Button1({ count, setCount }) {
  return (
    <div className="Guzik1">
      <button onClick={() => setCount(count + 1)}>Dodaj</button>
    </div>
  );
}

export default Button1;
