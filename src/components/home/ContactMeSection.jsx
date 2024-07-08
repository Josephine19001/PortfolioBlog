import React, { useState } from 'react';
import axios from 'axios';
import { SectionLayout } from '../shared/Layout';

const BASE_URL = 'http://localhost:3030';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleOnChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const sendMail = async (event) => {
    event.preventDefault();

    // Send email
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6" id="contact">
      <form className="flex fle-wrap flex-col gap-10" onSubmit={sendMail}>
        <div className="flex flex-col md:flex-row gap-10">
          <input
            placeholder="Enter your name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleOnChange}
          />
          <input
            placeholder="Enter your email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleOnChange}
          />
        </div>
        <input
          placeholder="Your subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleOnChange}
        />
        <textarea
          placeholder="Your message"
          name="message"
          type="text"
          rows="5"
          required
          value={formData.message}
          onChange={handleOnChange}
        />
        <div className="self-end">
          <button className="btn-secondary" type="submit">
            Send
          </button>
        </div>
      </form>
      {statusMessage && (
        <p className={isError ? 'text-red-500' : 'text-green-500'}>
          {statusMessage}
        </p>
      )}
    </div>
  );
};

const ContactMeSection = () => {
  return (
    <SectionLayout
      title="Contact me"
      subTitle="Interested in working together? Let's get in touch"
      children={<ContactMe />}
    />
  );
};

export default ContactMeSection;
