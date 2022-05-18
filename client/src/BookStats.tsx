import React, { useEffect } from 'react';

export function BookStats({pagesPerhour, pagesRead}: BookStatsProps) {
    return (<div className='bookStats'></div>);
}

interface BookStatsProps {
    pagesRead: number;
    hoursRead: number;
    booksRead: number;
    pagesPerhour: number;
    bookName: string;
}