import React from 'react';
import ProductCard from './ProductCard';
import Section from './Section';
import { newList } from '../constant/products';
import { newAd } from '../constant/images';

const SectionPopular = () => (
  <Section
    title="Últimos productos"
    subTitle="Lorem ipsum dolor sit amet."
    additional={newAd}
    childrenDisplay="grid"
    id="new"
  >
    {newList.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))}
  </Section>
);
export default SectionPopular;
