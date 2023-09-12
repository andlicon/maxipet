import React from "react";
import Brand from "../components/Brand"
import Section from "../components/Section";
import { brandAdditional } from "../constant/images";
import { brandList } from "../constant/brand";

const SectionBrand = () => {
  return (
    <Section
      title="Trabajamos con las mejores marcas"
      subTitle="Lorem ipsum dolor sit amet."
      additional={brandAdditional}
      childrenDisplay="flex"
      id="comprar-marca">
      {
        brandList.map((brand, index) => {
          return (
            <Brand brand={brand} key={index} background={false} />
          )
        })
      }
    </Section>
  )
}
export default SectionBrand;
