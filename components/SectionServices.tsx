import React from 'react';
import Section from './Section';
import Service from './Service';
import { serviceList } from '../constant/services';
import { serviceAdditional } from '../constant/images';

const SectionServices = () => (
  <Section
    title="Nuestros servicios"
    subTitle="Lorem ipsum dolor sit amet."
    additional={serviceAdditional}
    childrenDisplay="grid"
    id="servicios"
  >
    {serviceList.map((service) => (
      <Service
        service={service}
        button={{ label: '', icon: '' }}
        key={service.id}
      />
    ))}
  </Section>
);
export default SectionServices;
