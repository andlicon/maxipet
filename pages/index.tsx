import React from 'react';
import Header from '../components/NavBar';
import BannerDisplay from '../components/BannerDisplay';
import Section from '../components/Section';
import Category from '../components/Category'
import ProductCard from '../components/ProductCard'
import { bannerImages } from '../constant/images';
import { categoryList } from '../constant/categories';
import { popularList } from '../constant/products';

function HomePage() {
  return (
    <>
      <Header />
      <BannerDisplay images={bannerImages} />
      <div className="container page__content mx-auto">
        {/* all categories */}
        <Section
          title='Una gran variedad de categorías'
          subTitle='Lorem ipsum dolor sit amet.'>
          {
            categoryList.map((category) => {
              return (
                <Category category={category} key={category.id} />
              )
            })
          }
        </Section>
        {/* popular ones */}
        <Section
          title='Productos populares'
          subTitle='Lorem ipsum dolor sit amet.'>
          {
            popularList.map((product) => {
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
