import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-primary text-white'>
      <div className='container mx-auto px-5 py-10'>
        <div className='flex flex-wrap justify-between'>
          {/* About Section */}
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h5 className='text-xl font-bold mb-2'>
              About Learning Management System
            </h5>
            <p>
              A user-friendly learning management system that integrates
              features from leading platforms for a seamless educational
              experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h5 className='text-xl font-bold mb-2'>Quick Links</h5>
            <ul>
              <li>
                <a href='#' className='hover:text-secondary'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-secondary'>
                  Features
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-secondary'>
                  Pricing
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-secondary'>
                  FAQs
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-secondary'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className='w-full md:w-1/3'>
            <h5 className='text-xl font-bold mb-2'>Contact Us</h5>
            <p>Email: contact@lms.com</p>
            <p>Phone: 1 (800) 424 4421</p>
            <p>Address: 123 Educational Lane, School City, Edu</p>
          </div>
        </div>

        <div className='text-center mt-10 border-t border-gray-700 pt-5'>
          <p>&copy; {new Date().getFullYear()} LMS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
