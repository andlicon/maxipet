import banner from "../images/banner.png";
import featureAd from "../images/featuredProductAd.png";
import {
  TO_TOP,
  TO_LEFT,
  TO_RIGHT
} from "../constant/components";

export const bannerImages = [
  {
    url: banner,
    alt: "Un perro sacando la lengua",
    id: 1
  },
  {
    url: banner,
    alt: "Un perro sacando la lengua",
    id: 2
  },
  {
    url: banner,
    alt: "Un perro sacando la lengua",
    id: 3
  },
  {
    url: banner,
    alt: "Un perro sacando la lengua",
    id: 4
  }
]

export const featuredAd = {
  contentType: "image",
  content: featureAd.src,
  placement: TO_LEFT
}

export const newAd = {
  contentType: "image",
  content: featureAd.src,
  placement: TO_RIGHT
}

export const serviceAdditional = {
  contentType: "text",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.",
  placement: TO_TOP
}

export const brandAdditional = {
  contentType: "text",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.",
  placement: TO_LEFT
}
