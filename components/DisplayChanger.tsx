import React from 'react';

const DisplayChanger = ({ current, changeImage }) => (
  <button
    type="button"
    className={`w-9 h-2 rounded decoration-transparent hover:cursor-pointer ${current ? 'bg-active' : 'bg-disabled'
      }`}
    onClick={changeImage}
  >
    <span className="hidden">.</span>
  </button>
);
export default DisplayChanger;

