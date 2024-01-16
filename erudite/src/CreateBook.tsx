// Create book entry with isbn and other details
// select books from this to be shown in book Entry form
import React, { useEffect, useState } from "react";
import "./CreateBook.less";

interface CreateBookProps {}

export function CreateBook({}: CreateBookProps) {
  const [bookName, setBookName] = useState("");
  const [page_count, setPageCount] = useState<number>();
  
  useEffect(() => {
    console.log({bookName, page_count});
  }, [bookName, page_count])

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
    </>
  );
}
