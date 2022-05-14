import { useEffect } from "react";

export default function InputForm() {
  useEffect(() => {
    console.log("init");
  });
  return (
    <>
      <div>
        <div className="formRow">
          <label>Book Name: </label>
          <input type="text" />
        </div>
        <div className="formRow">
          <label>Hours Read: </label>
          <input type="text" />
        </div>
        <div className="formRow">
          <label>Book pages: </label>
          <input type="text" />
        </div>

        <button type="submit">Submit</button>
      </div>
    </>
  );
}
