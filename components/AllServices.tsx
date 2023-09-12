import React from 'react';
import Section from '../components/Section';
import Service from '../components/Service';
import { serviceList } from '../constant/services';

const AllServices = () => {
  return (
    <Section
      title='Nuestros servicios'
      subTitle='Lorem ipsum dolor sit amet.'
      image={null}>
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
