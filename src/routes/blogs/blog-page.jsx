import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/shared/Layout';
import BreadCrumbs from '../../components/blogs/BreadCrumbs';
import BlogPageComponent from '../../components/blogs/BlogPageComponent';
import RecentThreeBlogs from '../../components/blogs/RecentThreeBlogs';
import { getThreeRecentBlogs } from '../../utils/threeRecentBlogs';

const BlogPage = ({ blogs }) => {
  const { blogId } = useParams();
  const blogEntryNameFromId = decodeURIComponent(blogId).split('-').join(' ');

  if (!blogs || blogs.length === 0) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  const blog = blogs.find(
    (blog) => blog.fields.entryName === blogEntryNameFromId
  );

  const recentBlogs = getThreeRecentBlogs(blogs, blog.sys.id);

  if (!blog) {
    return (
      <Layout>
        <p>Blog not Found</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <BreadCrumbs blogLink={blog.fields.entryName.split(' ').join('-')} />
      <BlogPageComponent
        date={new Date(blog.sys.createdAt).toLocaleDateString()}
        tags={blog.metadata.tags.map((tag) => tag.sys.id)}
        content={blog.fields.blogEntry.content}
      />
      <div>
        <h3 className="text-4xl font-medium mb-10">Recent Blogs</h3>
        <RecentThreeBlogs blogs={recentBlogs} />
      </div>
    </Layout>
  );
};

export default BlogPage;
