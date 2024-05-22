import Layout from '../components/shared/Layout';
import LeftSide from '../components/resume/LeftSide';
import RightSide from '../components/resume/RightSide';

const Resume = () => {
  return (
    <Layout>
      <div className="mt-10 flex flex-wrap md:flex-nowrap gap-5">
        <div className="w-full md:w-3/6">
          <LeftSide />
        </div>
        <div className="w-full">
          <RightSide />
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
