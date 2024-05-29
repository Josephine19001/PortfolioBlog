import React from 'react';
import { GiGraduateCap } from 'react-icons/gi';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegCalendarMinus } from 'react-icons/fa';
import { experiences, educations } from './content';

const RightSide = () => {
  return (
    <div>
      <div className="resume-base">
        <h3>Experiences</h3>
        <div className="flex flex-col gap-5">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex items-center gap-10 bg-[#2A2D36] rounded-lg p-4"
            >
              <img
                src={experience.image}
                className="w-10 h-10 rounded-full"
                alt="Company logo"
              />
              <div>
                <h4 className="mb-1">
                  {experience.title} (
                  <span className="text-secondary">{experience.type}</span>)
                </h4>
                <div className="flex gap-6 mb-6">
                  <p>
                    <CiLocationOn className="inline mr-2" />
                    {experience.location}
                  </p>
                  <p>
                    <FaRegCalendarMinus className="inline mr-2" />
                    {experience.location}
                  </p>
                </div>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="resume-base mt-5">
        <h4>Education</h4>

        <div className="flex flex-col gap-5">
          {educations.map((education, index) => (
            <div
              key={index}
              className="flex items-center gap-10 bg-[#2A2D36] rounded-lg p-4"
            >
              <img
                src={education.image}
                className="w-10 h-10 rounded-full"
                alt="Education logo"
              />

              <div>
                <h4 className="mb-1">{education.degree}</h4>
                <div className="flex gap-6 mb-6">
                  <p>
                    <CiLocationOn className="inline mr-2" />
                    {education.location}
                  </p>
                  <p>
                    <GiGraduateCap className="inline mr-2" />
                    {education.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
