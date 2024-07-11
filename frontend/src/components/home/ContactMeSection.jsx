import React, { useState } from 'react';
import { FaSpinner, FaExclamationCircle } from 'react-icons/fa';
import axios from 'axios';

const BASE_URL = 'http://localhost:3030';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
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
    setIsSending(true);
    try {
      await axios.post(`${BASE_URL}/api/send-mail`, {
        from: formData.email,
        subject: formData.subject,
        html: formData.message
      });

      setStatusMessage('Email sent successfully!');
      setIsError(false);
    } catch (error) {
      setStatusMessage('Failed to send email. Please try again.');
      setIsError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6" id="contact">
      <form className="flex flex-wrap flex-col gap-10" onSubmit={sendMail}>
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
          rows="5"
          required
          value={formData.message}
          onChange={handleOnChange}
        />
        <div className="self-end">
          <button className="btn-secondary" type="submit" disabled={isSending}>
            {isSending ? <FaSpinner className="animate-spin" /> : 'Send'}
          </button>
        </div>
      </form>
      {statusMessage && (
        <div
          className={`flex items-center gap-2 ${
            isError ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {isError && <FaExclamationCircle />}
          <p>{statusMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ContactMe;
