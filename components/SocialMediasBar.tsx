import React from 'react';

function SocialMediasBar({socialMedias}) {
  return (
    <div className='socialMedias mx-2'>
      {
        socialMedias.map((sm, index) => {
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