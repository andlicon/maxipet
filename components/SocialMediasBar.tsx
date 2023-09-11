import React from 'react';
import { SocialMedia } from '../constant/socialMedia'

function SocialMediasBar({socialMedias}) {
  return (
    <div className='socialMedias ms-2'>
      {
        socialMedias.map((sm:SocialMedia, index:number) => {
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