import React, { useEffect } from 'react';
import './DayBlock.css';

export function DayBlock() {

    useEffect(() =>{
    });


    return (<div className='daysBlock'></div>);
}

interface DayBlockProps {
    pagesRead: number;
    date: string;
    bookName: string;
}