import React from 'react';

const DisplayChanger = ({ current, changeImage }) => {
  return (
    <button
      className={`display-changer rounded ${current ? 'current' : ''}`}
      onClick={changeImage}>

    </button>
  );
};
export default DisplayChanger;
