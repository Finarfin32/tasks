import React, { useState } from "react";
import { useEffect } from "react";
import "./MyTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faX } from "@fortawesome/free-solid-svg-icons";
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

  // function Check2() {
  //   if (data?.completed === true) {
  //     return <FontAwesomeIcon icon="fa-solid fa-check" />;
  //   } else return <FontAwesomeIcon icon="fa-solid fa-x" />;
  // }

  return (
    <>
      {data?.map((data) => (
        <div className="tile">
          <div className="title" style={{ float: "left" }}>
            {`Title: ${data?.title}`}
          </div>
          {data?.completed ? (
            <div className="completed" style={{ float: "right" }}>
              {` Completed: ${data?.completed}`}
              <FontAwesomeIcon icon={faCheckSquare} size="xs" />
            </div>
          ) : (
            <div className="completed" style={{ float: "right" }}>
              {` Completed: ${data?.completed}`}
              <FontAwesomeIcon icon={faX} />
            </div>
          )}

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
