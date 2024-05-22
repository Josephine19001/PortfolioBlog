import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Tags from './Tags';

const BlogItem = ({ image, title, summary, tags, index }) => {
  return (
    <div
      key={index}
      className={`flex flex-col md:flex-row items-center gap-10 ${
        index === 1 && 'md:flex-row-reverse'
      }`}
    >
      <div className="w-full sm-w-1/2">
        <img
          src={image}
          alt={`${title} image`}
          className="rounded-md w-full h-auto"
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p>{summary}</p>
        <Tags tags={tags} />
        <button className="btn-secondary">
          <span>Read more</span>
          <FaArrowRight className="inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
