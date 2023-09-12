import React from 'react';
import ProductCard from '../components/ProductCard';
import Section from './Section';
import { popularList } from '../constant/products';

const SectionPopular = () => {
  return (
    <Section
      title='Productos populares'
      subTitle='Lorem ipsum dolor sit amet.'
      additional={null}
      childrenDisplay='flex'>
      {
        popularList.map((product) => {
          return (
            <ProductCard product={product} key={product.id} />
          )
        })
      }
    </Section>
  )
}
export default SectionPopular;
