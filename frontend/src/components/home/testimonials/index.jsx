import React from 'react';
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight
} from 'react-icons/fa';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Navigation } from 'swiper/modules';

import { SectionLayout } from '../../shared/Layout';
import TestimonialItem from './TestimonialItem';
import { testimonials } from './testimonies';

SwiperCore.use([Navigation]);

const Testimonials = () => {
  return (
    <div className="w-full">
      <div className="flex md:justify-center gap-5 mb-10 cursor-pointer">
        <FaRegArrowAltCircleLeft
          className="hover:text-secondary arrow-left"
          size={40}
        />
        <FaRegArrowAltCircleRight
          className="hover:text-secondary arrow-right"
          size={40}
        />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={{ prevEl: '.arrow-left', nextEl: '.arrow-right' }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
      >
        <div className="flex gap-4">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialItem
                message={testimonial.message}
                name={testimonial.name}
                title={testimonial.title}
                image={testimonial.image}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <SectionLayout
      title="Testimonials"
      subTitle="What people are saying about me"
      children={<Testimonials />}
    />
  );
};

export default TestimonialsSection;
