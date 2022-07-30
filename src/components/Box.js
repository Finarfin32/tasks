import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Box(props) {
  const [isOpen, setIsOpen] = useState(true);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <div className="item2">
        <button onClick={handleOnClick}>{props.children}</button>
        {isOpen && (
          <span {...props}>
            <h2>
              <FontAwesomeIcon icon={faCoffee} size="xs" />
            </h2>
          </span>
        )}
      </div>
    </div>
  );
}

export default Box;
