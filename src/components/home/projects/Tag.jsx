import React from 'react';
import { FaCode, FaCodepen } from 'react-icons/fa';

const Tag = ({ icon, label, bgColor, color }) => {
  return (
    <div>
      <div
        className={`inline-flex items-center gap-1 ${bgColor} ${color} p-1 rounded-sm`}
      >
        {icon}
        <span>{label}</span>
      </div>
    </div>
  );
};

export const FrontendTag = (
  <Tag icon={<FaCode />} bgColor="bg-gray" label="Frontend" />
);

export const BackendTag = (
  <Tag
    icon={<FaCodepen />}
    bgColor="bg-yellow"
    color="text-black"
    label="Backend"
  />
);

export const FullstackTag = (
  <Tag icon={<FaCode />} bgColor="bg-pink" label="Fullstack" />
);

export default Tag;
