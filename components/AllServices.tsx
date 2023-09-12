import React from 'react';
import Section from '../components/Section';
import Service from '../components/Service';
import { serviceList } from '../constant/services';
import { serviceAdditional } from '../constant/images';

const AllServices = () => {
  return (
    <Section
      title='Nuestros servicios'
      subTitle='Lorem ipsum dolor sit amet.'
      additional={serviceAdditional}
      childrenDisplay='grid'>
      {
        serviceList.map(service => {
          return (
            <Service
              service={service}
              button={{ label: '', icon: '' }}
              key={service.id} />
          )
        })
      }
    </Section>
  )
}
export default AllServices;
