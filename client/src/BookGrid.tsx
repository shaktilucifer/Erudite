import React, { useEffect } from 'react';
import './BookGrid.css';

export function BookGrid() {

    useEffect(() =>{
        console.log('get list of books , pages read by day');
        console.log('probably get this when user logs the data in book journal');
    })

    const renderDayBlocks = () => {
        return (<div className='daysBlock'></div>);
    }


    return (<div className='daysWrapper'>{renderDayBlocks()}</div>)
}