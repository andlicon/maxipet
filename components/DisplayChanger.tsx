import React from 'react';

const DisplayChanger = ({ current, changeImage }) => (
  <button
    type="button"
    className={`display-changer rounded ${current ? 'current' : ''}`}
    onClick={changeImage}
  >

  </button>
);
export default DisplayChanger;
