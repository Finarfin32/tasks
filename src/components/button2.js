import { React } from "react";
import "../App.css";

function Button2({ count, setCount }) {
  return (
    <div className="Guzik2">
      <button onClick={() => setCount(count - 1)}>Odejmij</button>
    </div>
  );
}

export default Button2;
