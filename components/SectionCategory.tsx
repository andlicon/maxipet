import React from 'react';
import Category from './Category';
import Section from './Section';
import { categoryList } from '../constant/categories';

const SectionCategory = () => (
  <div className="container page__content mx-auto">
    {/* all categories */}
    <Section
      title="Una gran variedad de categorías"
      subTitle="Lorem ipsum dolor sit amet."
      additional={null}
      childrenDisplay="flex"
      id="comprar-mascota"
    >
      {categoryList.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </Section>
  </div>
);
export default SectionCategory;
