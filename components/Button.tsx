import React from 'react';

const Button = ({ label, bootstrapIcon }) => {
  return (
    <button className='button rounded'>
      {
        bootstrapIcon
          ? <i className={`${bootstrapIcon} me-2`}></i>
          : null
      }
      {label}
    </button>
  )
}
export default Button;
