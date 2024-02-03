import React, { useEffect, useState } from "react";
import { Book } from "./hooks/useCreateBook";

interface BookListProps {
  filter: any;
}

export function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    fetch("/api/getAllBooks", {  headers:{
        "accepts":"application/json"
    }})
      .then((response) => response.json())
      .then((data) => setBooks(data.books));
  }, []);

  return (
    <>
      <div>
        {books.map((book) => (
          <div key={book.name}>{book.name}</div>
        ))}
      </div>
    </>
  );
}
