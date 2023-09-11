import React from 'react';

const Section = ({ children, title, subTitle }) => {
  return (
    <div className='container section'>
      <span className='section__subtitle'>{subTitle}</span>
      <h2 className='section__title'>{title.toUpperCase()}</h2>
      <div className='flex'>
        {
          children
        }
      </div>
    </div>
  );
};
export default Section;
