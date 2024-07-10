import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { SectionLayout } from '../../shared/Layout';
import { faqs } from './faqs';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (questionId) => {
    if (openQuestion === questionId) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(questionId);
    }
  };
  return (
    <div className="accordion-group w-full">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="accordion py-6 px-4 rounded-2xl bg-darkBlue border-b border-gray"
        >
          <button
            className="accordion-toggle group inline-flex items-center justify-between w-full text-left leading-8 hover:text-secondary bg-darkBlue"
            onClick={() => toggleQuestion(faq.id)}
          >
            <h5
              className={`${openQuestion === faq.id ? 'text-secondary' : ''}`}
            >
              {faq.question}
            </h5>

            {openQuestion === faq.id ? (
              <IoIosArrowUp
                size={25}
                className={`${openQuestion === faq.id ? 'text-secondary' : ''}`}
              />
            ) : (
              <IoIosArrowDown
                size={25}
                className={`${openQuestion === faq.id ? 'text-secondary' : ''}`}
              />
            )}
          </button>
          {openQuestion === faq.id && (
            <div className="accordion-content w-full px-0 overflow-hidden">
              <p className="mt-4 px-4">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FAQSection = () => {
  return (
    <SectionLayout
      title="Frequently Asked Questions"
      subTitle="Got any question?"
      children={<FAQ />}
    />
  );
};

export default FAQSection;
