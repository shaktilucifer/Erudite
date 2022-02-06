import React, { useEffect } from 'react';

export function BookGrid() {

    useEffect(() =>{
        console.log('get list of books , pages read by day');
        console.log('probably get this when user logs the data in book journal');
    })

    const renderDayBlocks = () => {
        return (<div className='daysBlock'></>);
    }


    return (<div className='daysWrapper'>{renderDayBlocks()}</div>)
}