import React from 'react';

const Tags = ({ tags }) => {
  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <span
            className={`px-2 py-1 text-sm rounded opacity-70 capitalize
          ${
            index % 5 === 0
              ? 'bg-primary'
              : index % 5 === 1
              ? 'bg-yellow text-black'
              : index % 5 === 2
              ? 'bg-purple'
              : index % 5 === 3
              ? 'bg-secondary'
              : 'bg-pink'
          }
          `}
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tags;
