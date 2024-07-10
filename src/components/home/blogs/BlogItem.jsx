import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Tags from '../../shared/Tags';
import { useNavigate } from 'react-router-dom';
import { generateBlogLink } from '../../../utils/blogLinkGenerator';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

const BlogItem = ({ image, title, summary, tags, index }) => {
  const navigate = useNavigate();
  const { scrollTop } = useScrollToTop();

  const handleBlogClick = () => {
    navigate(generateBlogLink(title));
    scrollTop();
  };

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
        <button className="btn-secondary" onClick={handleBlogClick}>
          <span>Read more</span>
          <FaArrowRight className="inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
