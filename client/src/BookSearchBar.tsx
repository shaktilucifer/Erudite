import { useEffect, useState } from "react";
import axios from 'axios';
import { useBooksApi } from "./hooks/useBookApi.ts";

export default function BookSearchBar() {
  const [testPrintBookApi, setTestPrintBookApi] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [bookDocuments, setBookDocuments] = useState([]);

  const {getBookByName} = useBooksApi();
  useEffect(() => {
  });

  const formatAndGetBooks = (searchInput: string) => {
       getBookByName(searchInput).then((response) => {
          if(response) {
            console.log(response.data.docs);
            setTestPrintBookApi(searchInput);
            setBookDocuments(response.data.docs);
          }
       });
  }

  return (
    <>
      <div>
        <div className="formRow">
          <label>Search books </label>
          <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        </div>
        <button type="submit" onClick={() => formatAndGetBooks(searchInput)}> Submit </button>
        <h3>The book searched by api is {testPrintBookApi}</h3>
        {bookDocuments.map((books) => {
          return <div>{books.title}</div>;
        })}
        
      </div>
    </>
  );
}
