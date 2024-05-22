import Layout from '../components/shared/Layout';
import HeroSection from '../components/home/HeroSection';
import ProjectSection from '../components/home/projects';
import BlogsSection from '../components/home/blogs';
import TestimonialsSection from '../components/home/testimonials';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectSection />
      <BlogsSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Home;
