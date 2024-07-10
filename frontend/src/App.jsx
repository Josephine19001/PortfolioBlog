import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/root';
import Resume from './routes/resume';
import Blogs from './routes/blogs';
import BlogPage from './routes/blogs/blog-page';
import { useFetchBlogs } from './hooks/useFetchBlogs';
import LoadingComponent from './components/shared/Loading';
import ErrorComponent from './components/shared/Error';

const App = () => {
  const { blogs, loading, error } = useFetchBlogs();

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blogs" element={<Blogs blogs={blogs} />} />
        <Route path="/blogs/:blogId" element={<BlogPage blogs={blogs} />} />
      </Routes>
    </Router>
  );
};

export default App;
