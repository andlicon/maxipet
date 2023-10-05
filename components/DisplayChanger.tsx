import React from 'react';

const DisplayChanger = ({ current, changeImage }) => (
  <span
    className={`w-9 h-2 relative rounded decoration-transparent hover:cursor-pointer ${current ? 'bg-active' : 'bg-disabled'}`}
    onClick={changeImage}
  ></span>
);
export default DisplayChanger;
