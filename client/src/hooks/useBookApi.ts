import React from 'react';
import axios from 'axios';

export function useBooksApi() {
    const getBookByName = ((bookName: string) => {
        return axios.get(`http://openlibrary.org/search.json?title=${bookName}`)
    });

    return {
        getBookByName
    }
}