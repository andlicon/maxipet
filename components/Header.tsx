import React from 'react';
import SelectLocation from './SelectLocation';
import IconGroup from './IconGroup';
import PageNavigate from './PageNavigate';
import SearchBar from './SearchBar';
import {
  internalRedirect,
  actionsRedirect,
  socialMediaRedirect
} from '../constant/pageRedirect';
import { locationsList } from '../constant/locations';
import Image from 'next/image';
import Logo from '../images/logo-maxipet-white-bg.png';

function Header() {

  return (
    <div className='header'>
      <div className='flex flex-row items-center'>
        <div className="container mx-auto flex flex-row justify-end items-center gap-x-4">
          <SelectLocation locations={locationsList} />
          <IconGroup iconGroup={socialMediaRedirect} />
        </div>
      </div>
      <div className='container mx-auto flex justify-between items-center'>
        <a href="/">
          <Image src={Logo} className='header__logo' alt="MaxiPet logo" />
        </a>
        <SearchBar />
        <div className='actions'>
          <IconGroup iconGroup={actionsRedirect} />
        </div>
      </div>
      <div className='pageNavigate__container'>
        <PageNavigate items={internalRedirect} />
      </div>
    </div>
  )
}
export default Header;
