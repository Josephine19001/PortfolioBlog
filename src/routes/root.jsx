import Layout from '../components/shared/Layout';
import HeroSection from '../components/home/HeroSection';
import ProjectSection from '../components/home/projects';
import BlogsSection from '../components/home/blogs';
import TestimonialsSection from '../components/home/testimonials';
import ServicesSection from '../components/home/services';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectSection />
      <BlogsSection />
      <TestimonialsSection />
      <ServicesSection />
    </Layout>
  );
};

export default Home;
