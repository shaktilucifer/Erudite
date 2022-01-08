import { useEffect, useState } from "react";
import axios from 'axios';
import { useBooksApi } from "./hooks/useBookApi.ts";

export default function BookSearchBar() {
  const [testPrintBookApi, setTestPrintBookApi] = useState('');
  const {getBooksByName} = useBooksApi();
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
        <h3>The book searched by api is {testPrintBookApi}</h3>
      </div>
    </>
  );
}
