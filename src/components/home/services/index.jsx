import React from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import { SectionLayout } from '../../shared/Layout';
import { services } from './services';

const Services = () => {
  return (
    <div className="flex flex-wrap gap-20 justify-center w-full">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-start p-6 bg-darkBlue rounded-lg sm:w-[250px] md:w-[350px] hover:border hover:border-primary hover:scale-110 transition-transform duration-750 gap-5"
        >
          <service.icon className="text-primary" size={60} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <MdArrowRightAlt />
        </div>
      ))}
    </div>
  );
};

const ServicesSection = () => {
  return (
    <SectionLayout
      title="Services"
      subTitle="Here are some of the services I offer"
      children={<Services />}
    />
  );
};

export default ServicesSection;
