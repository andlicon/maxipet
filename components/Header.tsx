import React from 'react';
import { socialMediaList } from '../constant/socialMedia';

function Header() {

  return (
    <div className='header'>
      <div className="container mx-auto p-1 flex flex-row justify-end">
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
      </div>
    </div>
  )
}
export default Header;