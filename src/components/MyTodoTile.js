import React, { useState } from "react";
import { useEffect } from "react";
import "./MyTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faX } from "@fortawesome/free-solid-svg-icons";
function TodoTile({ inputText }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  console.log(data);

  // const filteredData = data.filter((el) => {
  //   if (inputText === "") {
  //     return el;
  //   } else {
  //     return el.title.toLowerCase().includes(inputText);
  //   }
  // });

  return (
    <>
      {data
        ?.filter((el) => el.title.toLowerCase().includes(inputText))
        .map((data, idx) => (
          <>
            <div className="tile" key={idx}>
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
            {/* <ul>
            {filteredData.map((data) => (
              <li key={data.id}>{data?.title}</li>
            ))}
          </ul> */}
          </>
        ))}
    </>
  );
}

export default TodoTile;
