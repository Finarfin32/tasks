import { React } from "react";

function List({ inputText, data }) {
  const filteredData = data.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return el.text.toLowerCase().includes(inputText);
    }
  });
  return (
    <ul>
      {filteredData.map((data) => (
        <li key={data.id}>{data?.title}</li>
      ))}
    </ul>
  );
}

export default List;
