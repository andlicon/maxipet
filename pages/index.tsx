import React from 'react';
import Header from '../components/NavBar';
import BannerDisplay from '../components/BannerDisplay';
import Section from '../components/Section';
import Category from '../components/Category'
import { bannerImages } from '../constant/images';
import { categoryList } from '../constant/categories';

function HomePage() {
  return (
    <>
      <Header />
      <BannerDisplay images={bannerImages} />
      <div className="container page__content mx-auto">
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
      </div>
    </>
  );
}

export default HomePage;
