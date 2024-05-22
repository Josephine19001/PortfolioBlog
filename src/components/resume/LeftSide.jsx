import React from 'react';
import profile from '../../assets/profile.jpg';
import { skills } from './content';

const LeftSide = () => {
  return (
    <div>
      <div className="resume-base">
        <img
          className="rounded-lg w-full mb-2"
          src={profile}
          alt="Profile image"
        />
        <div>
          <h4 className="mb-2">Kayla Doe</h4>
          <p className="text-secondary ">Software Engineer, UK</p>
        </div>
        <p>
          Software Engineer with over 4 years of experience in the industry. I
          have a passion for creating and developing software that helps people
          in their daily lives.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-secondary py-1 px-3 rounded-sm opacity-90"
            >
              <span className="text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="resume-base">
        <h4>About me</h4>
        <p>
          I am a Software Engineer with over 4 years of experience in the
          industry. I have a passion for creating and developing software that
          helps people in their daily lives. I am always looking for new
          challenges and opportunities to learn new technologies. I also love
          cooking and traveling.
        </p>
      </div>
      <div className="resume-base">
        <h4>Contact</h4>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p>Location</p>
            <p>London, UK</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Email</p>
            <p>kayladoe@gmail.com</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Phone</p>
            <p>+44 123 456 789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
