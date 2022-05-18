import { useEffect } from "react";
import "./ReadingChallenge.css";

export default function ReadingChallenge() {
  useEffect(() => {
    console.log("init");
  });
  return (
    <>
      <div>
        <h1>Reading challenge</h1>
        <div className="formRow">
          <label>I want to read</label>
          <input className="numBooks" type="text" />
          <label>books</label>
        </div>
        <button className="submitChallenge" type="submit">
          Submit
        </button>
      </div>
    </>
  );
}
