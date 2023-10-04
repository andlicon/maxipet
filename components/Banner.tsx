import React from 'react';
import { StaticImageData } from "next/image"

interface BannerProps {
  url: StaticImageData
  alt: string
  id: number
}

const Banner = ({ url, alt }: BannerProps) => (
  <div className="banner">
    <img src={url.src} alt={alt} className="banner_img mx-auto" />
  </div>
);
export default Banner;
