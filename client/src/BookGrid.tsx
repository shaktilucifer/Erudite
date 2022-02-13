import React, { useEffect } from 'react';
import './BookGrid.css';
import { DayBlock } from './DayBlock.tsx';

export default function BookGrid() {

    useEffect(() =>{
        // console.log('get list of books , pages read by day');
        // console.log('probably get this when user logs the data in book journal');
    });

    const renderDayBlocks = () => {
        const dayBlocks = [];
        for (let i=0; i < 365; i++) {
            dayBlocks.push(<DayBlock />);   
        }
        return dayBlocks;
    }


    return (<div className='daysWrapper'>{renderDayBlocks()}</div>)
}