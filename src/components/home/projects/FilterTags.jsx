import React from 'react';
import { TAGS } from '../../constants';

const tags = [
  { key: TAGS.all, label: 'All' },
  { key: TAGS.frontend, label: 'Frontend' },
  { key: TAGS.backend, label: 'Backend' },
  { key: TAGS.fullstack, label: 'Fullstack' }
];

const FilterTags = ({ activeTag, onTagClick }) => {
  return (
    <div className="flex gap-10 flex-wrap">
      {tags.map((tag) => (
        <div
          className={`
        ${activeTag === tag.key ? 'bg-secondary' : 'bg-gray'}
        px-4 py-2 rounded-sm cursor-pointer hover:bg-secondary
      `}
          onClick={() => onTagClick(tag.key)}
          key={tag.key}
        >
          <span>{tag.label}</span>
        </div>
      ))}
    </div>
  );
};

export default FilterTags;
