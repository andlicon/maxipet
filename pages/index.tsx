import React from 'react';
import Image from 'next/image'
import Header from '../components/NavBar';
import BannerDisplay from '../components/BannerDisplay';
import Section from '../components/Section';
import Category from '../components/Category'
import ProductCard from '../components/ProductCard'
import { categoryList } from '../constant/categories';
import {
  popularList,
  featuredList,
  newList
} from '../constant/products';
import {
  bannerImages,
  featuredAd,
  newAd
} from '../constant/images';
import ad1 from '../images/ad1.png';
import ad2 from '../images/ad2.png';
import ad3 from '../images/ad3.png';

function HomePage() {
  return (
    <>
      <Header />
      <BannerDisplay images={bannerImages} />
      <div className="container page__content mx-auto">
        {/* all categories */}
        <Section
          title='Una gran variedad de categorías'
          subTitle='Lorem ipsum dolor sit amet.'
          image={null}>
          {
            categoryList.map((category) => {
              return (
                <Category category={category} key={category.id} />
              )
            })
          }
        </Section>

        {/* featured products */}
        <Section
          title='Productos destacados'
          subTitle='Lorem ipsum dolor sit amet.'
          image={featuredAd}>
          {
            featuredList.map((product) => {
              return (
                <ProductCard product={product} key={product.id} />
              )
            })
          }
        </Section>

        {/* add */}
        <div className='flex ad w-full'>
          <Image src={ad2} alt="A dog eating its dog food" className='w-1/2' />
          <Image src={ad1} alt="A shovel with dog food" className='w-1/2' />
        </div>

        {/* popular ones */}
        <Section
          title='Productos populares'
          subTitle='Lorem ipsum dolor sit amet.'
          image={null}>
          {
            popularList.map((product) => {
              return (
                <ProductCard product={product} key={product.id} />
              )
            })
          }
        </Section>

        {/* add */}
        <div className='ad w-full'>
          <Image src={ad3} alt="A happy dog lay down over the grass, playing with its toy" className='w-full' />
        </div>

        {/* News products */}
        <Section
          title='Últimos productos'
          subTitle='Lorem ipsum dolor sit amet.'
          image={newAd}>
          {
            newList.map((product) => {
              return (
                <ProductCard product={product} key={product.id} />
              )
            })
          }
        </Section>
      </div>
    </>
  );
}

export default HomePage;
