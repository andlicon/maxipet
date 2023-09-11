import React from 'react';
import { socialMediaList } from '../constant/socialMedia';

function SocialMediasBar() {
  return (
    <div className='socialMedias mx-2'>
      {
        socialMediaList.map((sm, index) => {
          return (
            <a href={sm.to} target='_blank' key={index} className='social-media mx-2'>
              <i className={sm.bootstrapClass}></i>
            </a>
          )
        })
      }
    </div>
  )
}
export default SocialMediasBar;