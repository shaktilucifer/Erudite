import React, { useEffect } from 'react';
import './BookGrid.css';
import { DayBlock } from './DayBlock';

export function BookGrid() {

    useEffect(() =>{
        // console.log('get list of books , pages read by day');
        // console.log('probably get this when user logs the data in book journal');
    });


    return (<div className='daysWrapper'><DayBlock /></div>)
}