import React, { useState } from 'react';
import { SectionLayout } from '../../shared/Layout';
import ProjectItem from './ProjectItem';
import { projects } from './projects';
import { TAGS } from '../../constants';
import FilterTags from './FilterTags';

const Projects = () => {
  const [activeTag, setActiveTag] = useState(TAGS.all);

  const handleOnTagClick = (tag) => {
    setActiveTag(tag);
  };

  const filteredProjects =
    activeTag === TAGS.all
      ? projects
      : projects.filter((project) => project.tag === activeTag);

  return (
    <>
      <div className="mb-10">
        <FilterTags activeTag={activeTag} onTagClick={handleOnTagClick} />
      </div>
      <div className="flex overflow-x-scroll w-full hide-scroll">
        <div className="flex gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectItem
              title={project.title}
              description={project.description}
              tag={project.tagIcon}
              previewLink={project.previewLink}
              image={project.image}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const ProjectSection = () => {
  return (
    <SectionLayout
      title="Project Section"
      subTitle="Cool things I have created"
      children={<Projects />}
    />
  );
};

export default ProjectSection;
