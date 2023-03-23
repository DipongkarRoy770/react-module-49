import React from 'react';

const Knob = (props) => {
  return (
    <div style={{border:'2px solid grey',margin:'10px',backgroundColor:'orange',color:'white'}}>
      <h6>wellcomr to react componet KONB</h6>
      <p>number of Knob:{props.price}</p>
    </div>
  );
};

export default Knob;