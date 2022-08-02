import React, { useState } from "react";
import { useEffect } from "react";
import "./MyTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function TodoTile() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  console.log(data);

  function Check2() {
    if (data?.completed === true) {
      return <FontAwesomeIcon icon="fa-solid fa-check" />;
    } else return <FontAwesomeIcon icon="fa-solid fa-x" />;
  }

  return (
    <>
      {data?.map((data) => (
        <div className="tile">
          <div className="title" style={{ float: "left" }}>
            {`Title: ${data?.title}`}
          </div>
          <div className="completed" style={{ float: "right" }}>
            {` Completed: ${data?.completed}`}
          </div>
          <div
            className="userid"
            style={{ float: "left" }}
          >{`User ID: ${data?.userId}`}</div>
        </div>
      ))}
    </>
  );
}

export default TodoTile;
