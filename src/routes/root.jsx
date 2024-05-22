import Layout from '../components/shared/Layout';
import HeroSection from '../components/home/HeroSection';
import ProjectSection from '../components/home/projects';
import BlogsSection from '../components/home/blogs';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectSection />
      <BlogsSection />
    </Layout>
  );
};

export default Home;
