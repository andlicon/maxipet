import React from 'react';

const Section = ({ children, title, subTitle, image }) => {
  return (
    <div className='container section mt-10'>
      <div>
        <span className='section__subtitle'>{subTitle}</span>
        <h2 className='section__title'>{title.toUpperCase()}</h2>
        <div className='section__content flex mt-6'>
          {
            image != null
              ? <img src={image.image} alt="" className='me-5' />
              : null
          }
          <div className='flex justify-between w-full flex-wrap'>
            {
              children
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
