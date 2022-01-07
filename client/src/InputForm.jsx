import {useEffect} from 'react';

export default function InputForm() {
  useEffect(() => {
   console.log("init");
  });
  return (<>
    <label>Book Name:</label>
    <input type='text' />
    
    <label>Hours read:</label>
    <input type='text' />

    <label>Book pages</label>
    <input type='text' />
  </>);
}
