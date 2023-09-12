import React from 'react';

const Section = ({ children, title, subTitle, image }) => {
  return (
    <div className='container section'>
      <div>
        <span className='section__subtitle'>{subTitle}</span>
        <h2 className='section__title'>{title.toUpperCase()}</h2>
        {
          image == null
            ?
            <div className='section__content flex flex-row mt-6'>
              <div className={`w-full flex flex-wrap items-start justify-start lg:justify-between gap-y-4`}>
                {
                  children
                }
              </div>
            </div>
            :
            <div className='section__content flex flex-col lg:flex-row mt-6'>
              <img src={image.image} className={`md:w-full section__img ${image.side ? 'lg:order-1 lg:ms-5' : 'lg:me-5'}`} alt="" />
              <div className='w-full flex flex-wrap justify-start mt-5  lg:mt-0 lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-y-4'>
                {
                  children
                }
              </div>
            </div>
        }
      </div>
    </div>
  );
};
export default Section;
