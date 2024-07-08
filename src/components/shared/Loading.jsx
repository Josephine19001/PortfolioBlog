import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <FaSpinner className="animate-spin" size={100} />
    </div>
  );
};

export default Spinner;
