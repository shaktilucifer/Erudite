import React from 'react';
import axios from 'axios';
import { OPENLIBRARY_API } from '../constants/AppConstant';

export function useBooksApi() {
    const getBookByName = ((bookName: string) => {
        return axios.get(`${OPENLIBRARY_API}/search.json?title=${bookName}`)
    });

    return {
        getBookByName
    }
}