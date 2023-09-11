import React from 'react';
import SelectLocation from './SelectLocation';
import SocialMediasBar from './SocialMediasBar';
import PageNavigate from './PageNavigate';
import { indexInternalRedirect } from '../constant/pageRedirect';
import { socialMediaList } from '../constant/socialMedia';
import { locationsList } from '../constant/locations';

function Header() {

  return (
    <>
      <div className='header flex flex-row items-center'>
        <div className="container mx-auto flex flex-row justify-end items-center gap-x-4">
          <SelectLocation locations={locationsList} />
          <SocialMediasBar socialMedias={socialMediaList} />
        </div>
      </div>
      <div className='pageNavigate__container'>
        <PageNavigate items={indexInternalRedirect} />
      </div>
    </>
  )
}
export default Header;