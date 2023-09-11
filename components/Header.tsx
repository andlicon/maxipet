import React from 'react';
import SelectLocation from './SelectLocation';
import SocialMediasBar from './SocialMediasBar';
import PageNavigate from './PageNavigate';
import { indexInternalRedirect } from '../constant/pageRedirect';
import { socialMediaList } from '../constant/socialMedia';
import { locationsList } from '../constant/locations';
import Image from 'next/image';
import Logo from '../images/logo-maxipet-white-bg.png';

function Header() {

  return (
    <div className='header'>
      <div className='flex flex-row items-center'>
        <div className="container mx-auto flex flex-row justify-end items-center gap-x-4">
          <SelectLocation locations={locationsList} />
          <SocialMediasBar socialMedias={socialMediaList} />
        </div>
      </div>
      <div className='container mx-auto flex justify-between items-center'>
        <a href="/">
          <Image src={Logo} className='header__logo' alt="MaxiPet logo" />
        </a>
        <div>b</div>
        <div>c</div>
      </div>
      <div className='pageNavigate__container'>
        <PageNavigate items={indexInternalRedirect} />
      </div>
    </div>
  )
}
export default Header;