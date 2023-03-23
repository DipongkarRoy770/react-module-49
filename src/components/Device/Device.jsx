import React from 'react';
import Price from '../Price/Price';
import './Device.css'

const Device = (props) => {
  return (
    <div className='device'>
      <h5>Have a device :{props.name} </h5>
      <Price brand="samsung"></Price>
    </div>
  );
};

export default Device;