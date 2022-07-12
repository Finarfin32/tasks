import React, { useState } from "react";
import { useEffect } from "react";

function Fetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <ul>
      {data.results.map((data) => (
        <li key={data.id}>
          {data.gender} {data.name}
        </li>
      ))}
    </ul>
  );
}

export default Fetch;
