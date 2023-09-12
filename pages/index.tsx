import React from 'react';
import Image from 'next/image'
import Header from '../components/NavBar';
import BannerDisplay from '../components/BannerDisplay';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import AllServices from '../components/AllServices';
import Brand from '../components/Brand'
import SectionCategory from '../components/SectionCategory';
import SectionFeatured from '../components/SectionFeatured';
import SectionPopular from '../components/SectionPopular';
import {
  newList
} from '../constant/products';
import {
  bannerImages,
  newAd,
  brandAdditional
} from '../constant/images';
import {
  brandList
} from '../constant/brand';
import ad1 from '../images/ad1.png';
import ad2 from '../images/ad2.png';
import ad3 from '../images/ad3.png';

function HomePage() {
  return (
    <>
      <Header />
      <BannerDisplay images={bannerImages} />
      <div className="container page__content mx-auto">
        <SectionCategory />
        <SectionFeatured />

        {/* add */}
        <div className='flex ad w-full'>
          <Image src={ad2} alt="A dog eating its dog food" className='w-1/2' />
          <Image src={ad1} alt="A shovel with dog food" className='w-1/2' />
        </div>

        <SectionPopular />

        {/* add */}
        <div className='ad w-full'>
          <Image src={ad3} alt="A happy dog lay down over the grass, playing with its toy" className='w-full' />
        </div>

        {/* News products */}
        <Section
          title='Últimos productos'
          subTitle='Lorem ipsum dolor sit amet.'
          additional={newAd}
          childrenDisplay='grid'>
          {
            newList.map((product) => {
              return (
                <ProductCard product={product} key={product.id} />
              )
            })
          }
        </Section>

        {/* Services */}
        <AllServices />

        {/* News products */}
        <Section
          title='Trabajamos con las mejores marcas'
          subTitle='Lorem ipsum dolor sit amet.'
          additional={brandAdditional}
          childrenDisplay='flex'>
          {
            brandList.map((brand, index) => {
              return (
                <Brand brand={brand} key={index} background={false} />
              )
            })
          }
        </Section>
      </div >
    </>
  );
}

export default HomePage;
