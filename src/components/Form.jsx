import { useState } from "react";

export default function Form({ handleSubmit }) {
  return (
    <form className="inputPoint" method="post" onSubmit={handleSubmit}>
      <label>
        X: <input type="number" name="xInput" defaultValue="0" />
      </label>
      <label>
        Y: <input type="number" name="yInput" defaultValue="0" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
