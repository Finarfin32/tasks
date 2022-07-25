import React, { useState } from "react";

function Check() {
  const arr = ["jeden", "dwa", "trzy"];
  const [value, setValue] = useState("");

  function Check2(event) {
    if (arr.includes({ value })) {
      console.log("✅ istnieje");
      event.preventDefault(event);
    } else {
      console.log("❌ nie istnieje");
      event.preventDefault(event);
    }
  }

  function onChange(event) {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={Check2}>
      <label>
        Test
        <input value={value} onChange={onChange} type="text" name="name" />
        <div>Input value: {value}</div>
      </label>
      <input type="submit" value="Wyślij" />
    </form>
  );
}

export default Check;
