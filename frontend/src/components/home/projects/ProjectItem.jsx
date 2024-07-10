import React from 'react';
import { RxOpenInNewWindow } from 'react-icons/rx';

const ProjectItem = ({ image, title, tag, description, previewLink }) => {
  const openNewPreviewLink = () => {
    window.open(previewLink, '_blank');
  };

  return (
    <div>
      <div className="min-w-[300px] max-w-[400px] cursor-pointer shadow-md transition ease-in-out delay-150 hover:scale-110 duration-150 flex flex-col gap-3">
        <img src={image} alt={`${title} image`} />
        {tag}
        <h3>{title}</h3>
        <p className="text-sm">{description}</p>
        <div>
          <button className="btn-secondary" onClick={openNewPreviewLink}>
            <RxOpenInNewWindow className="inline mr-1" />
            Live preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
