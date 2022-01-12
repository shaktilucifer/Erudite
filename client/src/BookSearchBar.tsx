import { useEffect, useState } from "react";
import axios from "axios";
import { useBooksApi } from "./hooks/useBookApi.ts";

export default function BookSearchBar() {
  const [testPrintBookApi, setTestPrintBookApi] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [bookDocuments, setBookDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getBookByName } = useBooksApi();
  useEffect(() => {});

  const formatAndGetBooks = (searchInput: string) => {
    setIsLoading(true);
    getBookByName(searchInput)
      .then((response) => {
        if (response) {
          setTestPrintBookApi(searchInput);
          setBookDocuments(response.data.docs);
          console.log(response.data.docs);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div>
        <div className="formRow">
          <label>Search books </label>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <button type="submit" onClick={() => formatAndGetBooks(searchInput)}>
          {!isLoading ? "Submit" : "Processing"}
        </button>
        <h3>The book searched by api is: </h3>
        {bookDocuments.map((books) => {
          return <><div>{books.title}, {books.author_name[0]}</div></>;
        })}
      </div>
    </>
  );
}
