import Layout from '../components/shared/Layout';
import HeroSection from '../components/home/HeroSection';
import ProjectSection from '../components/home/projects';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectSection />
    </Layout>
  );
};

export default Home;
