// Create book entry with isbn and other details
// select books from this to be shown in book Entry form
import React, { useState } from "react";
import "./CreateBook.less";
import { Book } from "./hooks/useCreateBook";

interface CreateBookProps {
  onSubmit: (book: Book) => void;
}

export function CreateBook({ onSubmit }: CreateBookProps) {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [page_count, setPageCount] = useState<number>(0);

  const onButtonSubmit = () => {
    const bookToCreate: Book = {
      name: bookName,
      pages: page_count,
      id: "",
      author: author,
    };
    onSubmit(bookToCreate);
  };

  return (
    <>
      Name:
      <input
        type="text"
        name="book_name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      Pages:
      <input
        type="number"
        name="page_count"
        value={page_count}
        onChange={(e) => setPageCount(+e.target.value || 0)}
      />
      Author:
      <input
        type="text"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit" onClick={onButtonSubmit}>
        Submit
      </button>
    </>
  );
}
