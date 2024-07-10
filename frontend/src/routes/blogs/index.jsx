import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/shared/Layout';
import { generateBlogLink } from '../../utils/blogLinkGenerator';

const Blogs = ({ blogs }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  if (!blogs) return null;

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.fields.entryName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center py-10">
        <div className="mb-10 px-5  text-center w-full">
          <h2 className="mb-3 text-5xl md:text-6xl lg:text-8xl">Blogs</h2>
          <p>Here are some of the blogs I've written.</p>

          <input
            type="text"
            placeholder="Search Blog"
            className="w-1/2 my-5 outline-none bg-[#1F2228] text-white p-3 border-b-0"
            arial-label="Search Blogs"
            onChange={handleSearchChange}
            value={search}
          />
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-0">
            {filteredBlogs.map((blog) => {
              const blogId = blog.sys.id;
              const blogTitle = blog.fields.entryName;
              const blogLink = generateBlogLink(blogTitle);

              return (
                <div
                  className="cursor-pointer transition-transform duration-500 hover:scale-110"
                  onClick={() => navigate(blogLink)}
                  tabIndex={0}
                  aria-label={`Read more about ${blogTitle}`}
                  key={blogId}
                >
                  <div className="p-1 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <img
                      src={blog.fields.blogImage.fields.file.url}
                      alt={`Cover image for ${blogTitle}`}
                      className="w-full h-60 rounded-lg object-cover"
                    />
                    <h3 className="mt-5 text-xl truncate">{blogTitle}</h3>
                    <p className="my-3 min-h-6 truncate">
                      {blog.fields.blogSummary}
                    </p>
                    <span className="text-secondary underline leading-3">
                      Read more
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No blogs found matching your search criteria.</p>
        )}
      </div>
    </Layout>
  );
};

export default Blogs;
