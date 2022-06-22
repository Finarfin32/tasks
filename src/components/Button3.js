import { React } from "react";
import "../App.css";

function Button3({ count, setCount }) {
  return (
    <div className="Guzik3">
      <button onClick={() => setCount(count + 1)}>Dodaj</button>
    </div>
  );
}

export default Button3;
