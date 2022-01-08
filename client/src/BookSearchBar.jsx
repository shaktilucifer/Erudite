import { useEffect, useState } from "react";
import axios from 'axios';
import { useBooksApi } from "./hooks/useBookApi.ts";

export default function BookSearchBar() {
  const [testPrintBookApi, setTestPrintBookApi] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const {getBookByName} = useBooksApi();
  useEffect(() => {
  });

  const formatAndGetBooks = () => {
    
  }

  return (
    <>
      <div>
        <div className="formRow">
          <label>Search books </label>
          <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        </div>
        <button type="submit" onClick={() => getBookByName(searchInput)}> Submit </button>
        <h3>The book searched by api is {testPrintBookApi}</h3>
      </div>
    </>
  );
}
