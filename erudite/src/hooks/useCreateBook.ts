import { useCallback } from "react";
import { ApiClient } from "../utils/ApiClient";

export interface Book {
  name: string;
  id: number | string;
  pages: number;
  author: string;
  ISBN?: string;
}

export function useCreateBook() {
  return useCallback((book: Book) => {
    return new ApiClient().post('/createBook').then((book: Book[]) => {
      return book;
    });
  }, []);
}