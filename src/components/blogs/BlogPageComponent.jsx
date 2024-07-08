import React from 'react';
import { GoHorizontalRule } from 'react-icons/go';
import Tags from '../shared/Tags';
import ContentRenderer from './ContentRenderer';

const BlogPageComponent = ({ date, tags, content }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-10 ">
      <div>
        <div className="flex  flex-wrap gap-3 sm:gap-5">
          <span className="text-secondary">{date}</span>
          {tags.length > 0 && (
            <>
              <GoHorizontalRule size={30} className="text-secondary" />
              <Tags tags={tags} />
            </>
          )}
        </div>
      </div>
      <ContentRenderer content={content} />
    </div>
  );
};

export default BlogPageComponent;
