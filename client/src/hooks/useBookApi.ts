import React from 'react';
import axios from 'axios';

export function useBooksApi() {
    const getBookByName = ((bookName: string) => {
        axios.get(`http://openlibrary.org/search.json?title=${bookName}`)
        .then((response) => {
          console.log(response);
          console.log(response.data.docs);
        })
    });

    return {
        getBookByName
    }
}