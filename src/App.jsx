import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/root';
import Resume from './routes/resume';
import Blogs from './routes/blogs';
import BlogPage from './routes/blogs/blog-page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId/:title" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
