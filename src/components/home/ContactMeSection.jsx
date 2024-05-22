import React, { useState } from 'react';
import { SectionLayout } from '../shared/Layout';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleOnChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6" id="contact">
      <form className="flex fle-wrap flex-col gap-10">
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
          <button className="btn-secondary">Send</button>
        </div>
      </form>
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
