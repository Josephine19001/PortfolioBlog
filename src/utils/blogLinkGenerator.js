export const generateBlogLink = (entryName) => {
  return `/blogs/${encodeURIComponent(entryName.split(' ').join('-'))}`;
};
