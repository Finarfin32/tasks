import React from "react";

function Check() {
  const test = ["test", "test1", "test2"];

  if (test.includes("test", "test1", "test2")) {
  }

  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Test
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Wyślij" />
    </form>
  );
}

export default Check;
