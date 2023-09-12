import React from 'react';
import Section from './Section';
import ProductCard from './ProductCard';
import { featuredAd } from '../constant/images';
import { featuredList } from '../constant/products';

const SectionFeatured = () => (
  <Section
    title="Productos destacados"
    subTitle="Lorem ipsum dolor sit amet."
    additional={featuredAd}
    childrenDisplay="grid"
    id="promociones"
  >
    {featuredList.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))}
  </Section>
);
export default SectionFeatured;
