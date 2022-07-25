import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Box() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const toggleIsLoading1 = () => {
    setChecked1((current) => !current);
  };

  const toggleIsLoading2 = () => {
    setChecked2((current) => !current);
  };

  const toggleIsLoading3 = () => {
    setChecked3((current) => !current);
  };

  return (
    <>
      <div className="container">
        <div className="item2">
          {checked1 && (
            <h2>
              <FontAwesomeIcon icon={faCoffee} size="xs" />
            </h2>
          )}
        </div>
        <div className="item2">
          {checked2 && (
            <h2>
              <FontAwesomeIcon icon={faCoffee} size="xs" />
            </h2>
          )}
        </div>
        <div className="item2">
          {checked3 && (
            <h2>
              <FontAwesomeIcon icon={faCoffee} size="xs" />
            </h2>
          )}
        </div>
      </div>
      <div class="container">
        <div className="item" onClick={toggleIsLoading1}>
          Kliknij
        </div>
        <div className="item" onClick={toggleIsLoading2}>
          Kliknij
        </div>
        <div className="item" onClick={toggleIsLoading3}>
          Kliknij
        </div>
      </div>
    </>
  );
}

export default Box;
