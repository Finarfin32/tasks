import React, { useState } from "react";

function Form() {
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  return (
    <div>
      <form className="form">
        <div className="form-control">
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control2">
          <label htmlFor="password">password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-control3">
          <label htmlFor="date">date: </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Confirm</button>
        <p>{Name}</p>
        <p>{password}</p>
        <p>{date}</p>
      </form>
    </div>
  );
}

export default Form;
