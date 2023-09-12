import React from 'react';
import { PageRedirect } from '../constant/pageRedirect'

function IconGroup({iconGroup}) {
  return (
    <div className='iconGroup ms-2'>
      {
        iconGroup.map((sm:PageRedirect, index:number) => {
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
export default IconGroup;
