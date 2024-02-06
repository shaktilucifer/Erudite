import { useEffect, useState } from "react";
import { Book } from "./useCreateBook";
import { ApiClient } from "../utils/ApiClient";

const apiClient = new ApiClient();

export function useGetAllBooks(): { books: Book[] } {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    apiClient.get("/api/getAllBooks").then((response: { books: Book[] }) => {
      setBooks(response.books);
    });
  }, []);

  return { books };
}
