import React from 'react';
import {
  TO_TOP,
  TO_LEFT,
  TO_RIGHT
} from '../constant/components';

const Section = ({ children, title, subTitle, additional, childrenDisplay }) => {

  const getAdditionalElement = (classes: string) => {
    if (additional.contentType == 'image') {
      return <img src={additional.content} className={classes} alt="" />;
    }
    return <p className={classes}>{additional.content}</p>
  }

  const displayAdditional = () => {
    let element = null;

    if (additional.placement == TO_TOP) {
      element = getAdditionalElement('w-full my-5');
    }
    else if (additional.placement == TO_LEFT) {
      element = getAdditionalElement('md:w-full section__img lg:me-5');
    }
    else if (additional.placement == TO_RIGHT) {
      element = getAdditionalElement('md: w-full section__img md:order-1 lg:ms-5');
    }

    return element;
  }

  return (
    <div className='container section'>
      <div>
        <span className='section__subtitle'>{subTitle}</span>
        <h2 className='section__title'>{title.toUpperCase()}</h2>
        <div className={`flex flex-col md:flex-row${additional?.placement == TO_TOP ? ' flex-wrap' : ''}`}>
          {
            additional
              ? displayAdditional()
              : null
          }
          {
            childrenDisplay == 'flex'
              ?
              <div className={`w-full flex flex-wrap items-start justify-start lg:justify-between gap-y-4`}>
                {
                  children
                }
              </div>
              :
              <div className='w-full flex flex-wrap justify-start mt-5 lg:mt-0 lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-y-4'>
                {
                  children
                }
              </div>
          }
        </div>
      </div>
    </div>
  );
};
export default Section;
