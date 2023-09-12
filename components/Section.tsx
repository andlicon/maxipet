import React from 'react';

const Section = ({ children, title, subTitle, image }) => {
  return (
    <div className='container section mt-10'>
      <div>
        <span className='section__subtitle'>{subTitle}</span>
        <h2 className='section__title'>{title.toUpperCase()}</h2>
        {
          image == null
            ?
            <div className='section__content flex flex-row mt-6'>
              <div className={`w-full flex flex-wrap items-center justify-center lg:justify-between`}>
                {
                  children
                }
              </div>
            </div>
            :
            <div className='section__content flex flex-col lg:flex-row mt-6'>
              <img src={image.image} className={`md:w-full md:ms-5 ${image.side ? 'md:order-1' : ''}`} alt="" />
              <div className='w-full flex flex-wrap justify-center lg:grid lg:grid-cols-3 lg:grid-rows-2'>
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
