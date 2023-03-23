import React from 'react';
import Knob from '../Knob/Knob';
import './Deal.css'

const Deal = (props) => {
  return (
    <div className='dial'>
      <h4>This is Dial Component</h4>
      <p>dial number:{props.digit}</p>
      <Knob price={props.digit}></Knob>
    </div>
  );
};

export default Deal;