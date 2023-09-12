import React from 'react';

const Section = ({ children, title, subTitle }) => {
  return (
    <div className='container section mt-10'>
      <span className='section__subtitle'>{subTitle}</span>
      <h2 className='section__title'>{title.toUpperCase()}</h2>
      <div className='section__content flex justify-between flex-wrap mt-6'>
        {
          children
        }
      </div>
    </div>
  );
};
export default Section;
