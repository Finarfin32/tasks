import React from "react";
import { useState } from "react";
import "../App.css";

function Color() {
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setColor((current) => !current);
  };

  return (
    <div>
      <div
        style={{
          color: color ? "red" : "",
        }}
        onClick={handleClick}
      >
        KOLOR
      </div>
    </div>
  );
}
export default Color;
