import React, { useState } from 'react';
import Deal from '../Deal/Deal';
import './Watch.css'

const Watch = () => {
  const [cound,setCound] =useState(0)

  const Counter=()=>{
    const newCounter = cound+1 
    setCound(newCounter)
  }

  return (
    <div className='header'>
      <h6>This is my Smart-Wacth</h6>
       <p>steps :{cound}</p>
       <button className='btn' onClick={Counter}>De Dour...</button>
       <Deal digit={cound}></Deal>
    </div>
  );
};

export default Watch;