import React from "react";
import { PageRedirect } from "../constant/pageRedirect";

function PageNavigate({ items }) {
  return (
    <nav className="container mx-auto pageNavigate">
      <ul className="flex justify-between items-center">
        {
          items.map((pageRedirect: PageRedirect, index: number) => {
            return (
              <a href={pageRedirect.to} key={index} className="flex items-center">
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
