import React from 'react';
import { SectionLayout } from '../../shared/Layout';
import BlogItem from './BlogItem';
import { getThreeRecentBlogs } from '../../../utils/threeRecentBlogs';

const Blogs = ({ recentBlogs }) => {
  return (
    <div className="flex flex-col gap-10">
      {recentBlogs.map((blog) => (
        <BlogItem
          title={blog.fields.entryName}
          image={blog.fields.blogImage.fields.file.url}
          tags={blog.metadata.tags.map((tag) => tag.sys.id)}
          summary={blog.fields.blogSummary}
          index={blog.sys.id}
          key={blog.sys.id}
        />
      ))}
    </div>
  );
};

const BlogsSection = ({ blogs }) => {
  if (!blogs) return null;
  const recentBlogs = getThreeRecentBlogs(blogs);

  return (
    <SectionLayout
      title="Blogs"
      subTitle="Check out my latest blogs"
      children={<Blogs recentBlogs={recentBlogs} />}
    />
  );
};
export default BlogsSection;
