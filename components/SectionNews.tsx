import React from "react";
import ProductCard from "../components/ProductCard";
import Section from "./Section";
import { newList } from "../constant/products";
import { newAd } from "../constant/images";

const SectionPopular = () => {
  return (
    <Section
      title="Últimos productos"
      subTitle="Lorem ipsum dolor sit amet."
      additional={newAd}
      childrenDisplay="grid"
      id="new">
      {
        newList.map((product) => {
          return (
            <ProductCard product={product} key={product.id} />
          )
        })
      }
    </Section>
  )
}
export default SectionPopular;
