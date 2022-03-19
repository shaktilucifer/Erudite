import React, { useEffect, useState } from 'react';

export function ToolTip({title, description}) {
    const [visible, setVisible] = useState();
    useEffect(() =>{
    }, []);


    return (<div className='tooltip'>
            <p>{title}</p>
            <p>{description}</p>
        </div>);
}
