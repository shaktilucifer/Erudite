import { useCallback } from "react";

export interface Book {
    name: string;
    id: number | string;
    pages: number;
    author: string;
    ISBN?: string;
}

const someGlobalMock: Book[] = [{
    name: 'Mark of Athena',
    id: 1,
    pages: 586,
    author: 'Rick Riordan',
}];

export function useCreateBook(){
    return useCallback((book: Book) => {
            return createBookApi().then((book: Book[]) => {
                return book;
            })
    }, []);
}

function createBookApi(): Promise<Book[]> {
    return new Promise((resolve, reject) => resolve(someGlobalMock))
}

export function getGlobalBookStore() {
    return someGlobalMock;
}