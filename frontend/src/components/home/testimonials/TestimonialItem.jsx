import React from 'react';
import { FaStar } from 'react-icons/fa';

const Stars = () => {
  return (
    <div className="flex">
      <FaStar className="text-yellow" size={20} />
      <FaStar className="text-yellow" size={20} />
      <FaStar className="text-yellow" size={20} />
      <FaStar className="text-yellow" size={20} />
      <FaStar className="text-yellow" size={20} />
    </div>
  );
};

const TestimonialItem = ({ message, image, name, title }) => {
  return (
    <div className="bg-darkBlue p-4 rounded-lg flex flex-col gap-2 w-full md:w-[350px]">
      <Stars />
      <p className="mt-2">{message}</p>
      <div className="flex gap-5 items-center mt-8">
        <img
          src={image}
          alt={`Testimonial picture of ${name}`}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h5>{name}</h5>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
