import React from 'react';
import ProductCard from './ProductCard';
import Section from './Section';
import { popularList } from '../constant/products';

const SectionPopular = () => (
  <Section
    title="Productos populares"
    subTitle="Lorem ipsum dolor sit amet."
    additional={null}
    childrenDisplay="flex"
    id="popular"
  >
    {popularList.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))}
  </Section>
);
export default SectionPopular;
