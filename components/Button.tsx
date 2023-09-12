import React from 'react';

const Button = ({ label, bootstrapIcon }) => (
  <button className="button rounded" type="button">
    {bootstrapIcon ? <i className={`${bootstrapIcon} me-2`} /> : null}
    {label}
  </button>
);
export default Button;
