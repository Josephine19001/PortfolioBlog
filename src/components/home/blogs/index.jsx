import React from 'react';
import { SectionLayout } from '../../shared/Layout';
import { blogs } from './blogs';
import BlogItem from './BlogItem';

const Blogs = () => {
  return (
    <div className="flex flex-col gap-10">
      {blogs.slice(0, 3).map((blog, index) => (
        <BlogItem
          title={blog.title}
          image={blog.image}
          tags={blog.tags}
          summary={blog.summary}
          index={index}
        />
      ))}
    </div>
  );
};

const BlogsSection = () => {
  return (
    <SectionLayout
      title="Blogs"
      subTitle="Check out my latest blogs"
      children={<Blogs />}
    />
  );
};
export default BlogsSection;
