import React from 'react';

const DisplayChanger = ({ current }) => {
  return (
    <button
      className={`display-changer rounded ${current ? 'current' : ''}`}>

    </button>
  );
};
export default DisplayChanger;
