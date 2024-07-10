import React from 'react';
import { TbFaceIdError } from 'react-icons/tb';

const ErrorComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <TbFaceIdError className="text-error" size={100} />
      <p className="mt-4 text-error text-xl font-semibold">
        Something went wrong while loading blogs! Please try to reload the page
        🙏
      </p>
    </div>
  );
};

export default ErrorComponent;
