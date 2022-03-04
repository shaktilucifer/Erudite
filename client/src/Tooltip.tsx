import React, { useEffect } from 'react';

export function ToolTip({title, description}) {

    useEffect(() =>{
    }, []);


    return (<div className='tooltip'>
            <p>{title}</p>
            <p>{description}</p>
        </div>);
}
