import React from 'react';

function PageNavigate({items}) {
  
  return (
    <nav className='container'>
      <ul>
        {
          items.map((pageRedirect, index) => {
            return(
              <a to={pageRedirect.to} key={index}>
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