import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';
import IconGroup from './IconGroup';
import Logo from '../images/logo-maxipet-white-bg.png';
import { actionsRedirect } from '../constant/pageRedirect';

const MainBar = () => (
  <div className="container mx-auto flex justify-between items-center">
    <Link href="/">
      <Image src={Logo} className="navBar__logo" alt="MaxiPet logo" />
    </Link>
    <SearchBar />
    <div className="actions">
      <IconGroup iconGroup={actionsRedirect} />
    </div>
  </div>
);
export default MainBar;
