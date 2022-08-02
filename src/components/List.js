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
      {filteredData.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default List;
