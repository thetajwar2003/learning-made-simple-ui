'use client';
import React, { useState } from 'react';

const faqData = [
  {
    question: 'How does LMS simplify classroom management?',
    answer:
      'Our platform integrates the best features from Blackboard, Google Classroom, and others into a user-friendly interface that makes classroom management more intuitive and less time-consuming.',
  },
  {
    question: 'Can I import my data from Blackboard or Google Classroom?',
    answer:
      'Yes, LMS allows for easy data import from other learning management systems. You can seamlessly transition your existing courses, assignments, and student data.',
  },
  {
    question: 'Is LMS suitable for all education levels?',
    answer:
      'Absolutely! Our platform is designed to cater to a wide range of educational needs, from K-12 to higher education.',
  },
  // Add more FAQs as needed
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-gray-200'>
      <button
        className='p-4 w-full  text-left flex justify-between items-center bg-primary hover:bg-secondary text-white rounded-md transition duration-300 ease-in-out'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='font-semibold'>{question}</span>
        <span className='text-xl'>{isOpen ? '−' : '+'}</span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? '200px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out',
        }}
      >
        <p className='py-2 px-4 text-white leading-loose m-2'>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-bold text-center mb-4'>
        Frequently Asked Questions
      </h2>
      <div className='max-w-2xl mx-auto'>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
