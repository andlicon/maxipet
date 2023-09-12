import React from "react";
import SelectLocation from "./SelectLocation";
import IconGroup from "./IconGroup";
import PageNavigate from "./PageNavigate";
import MainBar from "./MainBar";
import {
  internalRedirect,
  socialMediaRedirect
} from "../constant/pageRedirect";
import { locationsList } from "../constant/locations";

function NavBar() {
  return (
    <div className="navBar">
      <div className="flex flex-row items-center">
        <div className="container mx-auto flex flex-row justify-end items-center gap-x-4">
          <SelectLocation locations={locationsList} />
          <IconGroup iconGroup={socialMediaRedirect} />
        </div>
      </div>
      <MainBar />
      <div className="pageNavigate__container">
        <PageNavigate items={internalRedirect} />
      </div>
    </div>
  )
}
export default NavBar;
