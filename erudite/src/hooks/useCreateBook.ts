import { useCallback } from "react";

interface Book {
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
            // do call to save book
            someGlobalMock.push(book);
    }, []);
}

export function getGlobalBookStore() {
    return someGlobalMock;
}