export const getThreeRecentBlogs = (blogs, blogId = '') => {
  if (!blogs) return null;

  const sortedBlogs = blogs.sort((a, b) => {
    const createdAtA = new Date(a.sys.createdAt);
    const createdAtB = new Date(b.sys.createdAt);
    return createdAtB - createdAtA;
  });

  const recentBlogs = sortedBlogs.filter((blog) => blog.sys.id !== blogId);

  return recentBlogs.slice(0, 3);
};
