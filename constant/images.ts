import banner from '../images/banner.png';
import featureAd from '../images/featuredProductAd.png';
import {
  TO_TOP,
  TO_LEFT,
  TO_RIGHT
} from '../constant/components';

export const bannerImages = [
  {
    url: banner,
    alt: 'Un perro sacando la lengua',
    id: 1
  },
  {
    url: banner,
    alt: 'Un perro sacando la lengua',
    id: 2
  },
  {
    url: banner,
    alt: 'Un perro sacando la lengua',
    id: 3
  },
  {
    url: banner,
    alt: 'Un perro sacando la lengua',
    id: 4
  }
]

export const featuredAd = {
  image: featureAd.src,
  placement: TO_LEFT
}

export const newAd = {
  image: featureAd.src,
  placement: TO_RIGHT
}
