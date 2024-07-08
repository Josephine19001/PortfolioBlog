import React from 'react';
import { useNavigate } from 'react-router-dom';
import { generateBlogLink } from '../../utils/blogLinkGenerator';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const RecentThreeBlogs = ({ blogs }) => {
  const navigate = useNavigate();
  const { scrollTop } = useScrollToTop();

  const navigateToClickedBlog = (entryName) => {
    navigate(generateBlogLink(entryName));
    scrollTop();
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-0">
      {blogs.map((blog) => (
        <div
          className="cursor-pointer transition-transform duration-500 hover:scale-110"
          tabIndex={0}
          onClick={() => navigateToClickedBlog(blog.fields.entryName)}
          key={blog.sys.id}
        >
          <div className="bg-[#1F2228] rounded-lg overflow-hidden shadow-lg h-[300px]">
            <img
              src={blog.fields.blogImage.fields.file.url}
              alt={blog.fields.blogImage.fields.file.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">
                {blog.fields.entryName}
              </h3>
              <p className="text-sm text-gray-400 overflow-y-hidden">
                {blog.fields.blogSummary}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentThreeBlogs;
