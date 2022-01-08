import { useEffect, useState } from "react";
import axios from 'axios';

export default function BookSearchBar() {
  const [testPrintBookApi, setTestPrintBookApi] = useState('');
  useEffect(() => {
      axios.get('https://openlibrary.org/books/OL7353617M.json')
      .then((response) => {
        console.log(response);
        console.log(response.data.title);
        setTestPrintBookApi(response.data.title);
      })
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
