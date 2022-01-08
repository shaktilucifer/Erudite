import { useEffect } from "react";

export default function BookSearchBar() {
  useEffect(() => {

  });
  return (
    <>
      <div>
        <div className="formRow">
          <label>Search books </label>
          <input type="text" />
        </div>
        <button type="submit"> Submit </button>
      </div>
    </>
  );
}
