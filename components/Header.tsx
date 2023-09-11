import React from 'react';
import SelectLocation from './SelectLocation';
import SocialMediasBar from './SocialMediasBar';
import PageNavigate from './PageNavigate';

import { indexInternalRedirect } from '../constant/pageRedirect';

function Header() {

  return (
    <>
      <div className='header'>
        <div className="container mx-auto p-2 flex flex-row justify-end gap-x-4">
          <SelectLocation />
          <SocialMediasBar />
        </div>
      </div>
      <PageNavigate items={indexInternalRedirect} />
    </>
  )
}
export default Header;