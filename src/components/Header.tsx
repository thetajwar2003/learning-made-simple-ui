import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='text-white bg-black body-font sticky top-0' id='header'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center '>
        <Link
          href={'/'}
          className='flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer'
          id='clickable-logo'
        >
          {/* TODO: replace the scg with an actual logo of our product */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-10 h-10 text-white p-2 bg-primary rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl'>Learning Made Simple</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link className='mr-5 hover:text-gray-400' href='./partners'>
            Partners
          </Link>
          <Link className='mr-5 hover:text-gray-400' href='./resources'>
            Resources
          </Link>
          <Link className='mr-5 hover:text-gray-400' href='./founders'>
            Founders
          </Link>
        </nav>
        <Link
          href='/login'
          className='inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-secondary rounded text-base mt-4 md:mt-0'
          id='header-login'
        >
          Log In
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-4 h-4 ml-1'
            viewBox='0 0 24 24'
          >
            <path d='M5 12h14M12 5l7 7-7 7'></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}
