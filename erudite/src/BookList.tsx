import React, { useEffect, useState } from "react";
import { Book } from "./hooks/useCreateBook";

interface BookListProps {
  filter: any;
}

export function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/getAllBooks")
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
