import React from 'react';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import { featuredAd } from '../constant/images';
import { featuredList } from '../constant/products';

const SectionFeatured = () => {
  return (
    <Section
      title='Productos destacados'
      subTitle='Lorem ipsum dolor sit amet.'
      additional={featuredAd}
      childrenDisplay='grid'
      id='promociones'>
      {
        featuredList.map((product) => {
          return (
            <ProductCard product={product} key={product.id} />
          )
        })
      }
    </Section>
  )
}
export default SectionFeatured;
