import React from "react";
import SearchBar from "./SearchBar";
import IconGroup from "./IconGroup";
import Image from "next/image";
import Logo from "../images/logo-maxipet-white-bg.png";
import { actionsRedirect } from "../constant/pageRedirect";

const MainBar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <a href="/">
        <Image src={Logo} className="navBar__logo" alt="MaxiPet logo" />
      </a>
      <SearchBar />
      <div className="actions">
        <IconGroup iconGroup={actionsRedirect} />
      </div>
    </div>
  )
}
export default MainBar;
