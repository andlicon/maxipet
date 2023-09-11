import React from 'react';
import { PageRedirect } from '../constant/pageRedirect';

function PageNavigate({ items }) {
  return (
    <nav className='container mx-auto'>
      <ul className='flex justify-between'>
        {
          items.map((pageRedirect: PageRedirect, index: number) => {
            return (
              <a href={pageRedirect.to} key={index}>
                {pageRedirect.label}
              </a>
            )
          })
        }
      </ul>
    </nav>
  )
}
export default PageNavigate;