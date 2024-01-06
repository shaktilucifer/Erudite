import { useState }  from 'react';
import './Erudite.css';

export function Erudite() { 
  let [data, setData] = useState();
  data = [
        {name: "Mark_of_Athena", pageInfo: {start_end: [113, 165]}}, 
        {name: "Mark_of_Athena", pageInfo: {start_end: [166, 219]}} 
        ];
  return (
    <>
        {data.map((d) => <div>{d.name}: {`${d.pageInfo.start_end[0]} - ${d.pageInfo.start_end[1]}` }</div>)}
    </>
  )
}

