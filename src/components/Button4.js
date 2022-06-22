import { React } from "react";
import "../App.css";

function Button4({ count, setCount }) {
  return (
    <div className="Guzik4">
      <button onClick={() => setCount(count + 1)}>Dodaj</button>
    </div>
  );
}

export default Button4;
