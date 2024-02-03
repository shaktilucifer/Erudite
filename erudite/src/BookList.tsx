import React, { useEffect, useState } from "react";
import { useGetAllBooks } from "./hooks/useGetAllBooks";

interface BookListProps {
  filter: any;
}

export function BookList() {
  const {books} = useGetAllBooks();

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
