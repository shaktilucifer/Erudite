import { useCallback } from "react";

export interface Book {
  name: string;
  id: number | string;
  pages: number;
  author: string;
  ISBN?: string;
}

export function useCreateBook() {
  return useCallback((book: Book) => {
    return createBookApi().then((book: Book[]) => {
      return book;
    });
  }, []);
}

function createBookApi(): Promise<Book[]> {
  return new Promise((resolve, reject) => resolve({} as any));
}
