import { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});

export const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await client.getEntries({
          content_type: import.meta.env.VITE_CONTENTFUL_CONTENT_TYPE
        });

        setLoading(false);
        setBlogs(response.items);
      } catch (error) {
        setError(error);
      }
    };

    fetchBlogPosts();
  }, []);

  return {
    blogs,
    loading,
    error
  };
};
