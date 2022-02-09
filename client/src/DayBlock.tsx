import React, { useEffect } from 'react';

export function DayBlock() {

    useEffect(() =>{
        console.log('each block of BookGrid');
    });


    return (<div className='daysBlock'></div>);
}