import React from 'react';
import { PageRedirect } from '../constant/pageRedirect';

function IconGroup({ iconGroup }) {
  return (
    <div className="iconGroup ms-2">
      {iconGroup.map((sm: PageRedirect, index: number) => (
        <a
          href={sm.to}
          target="_blank"
          key={index}
          className="social-media mx-2"
          rel="noreferrer"
        >
          <i className={sm.bootstrapClass} />
        </a>
      ))}
    </div>
  );
}
export default IconGroup;
