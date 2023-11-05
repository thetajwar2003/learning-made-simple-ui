'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Corrected from 'next/navigation' to 'next/router'
import { useEffect, useState } from 'react';
import { isLoggedIn, logOut } from '../auth/auth'; // Adjust the import path as necessary

export default function Header() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const loggedIn = await isLoggedIn();
        setIsUserLoggedIn(loggedIn);
      } catch (error) {
        console.error('Error checking user authentication status:', error);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
      setIsUserLoggedIn(false);
      router.push('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className='text-white bg-black body-font top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <div className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
            {/* Replace the SVG with an actual logo of your product */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='w-10 h-10 text-white p-2 bg-primary rounded-full'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span className='ml-3 text-xl'>Learning Made Simple</span>
          </div>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          {isUserLoggedIn && (
            <Link href='/student' className='mr-5 hover:text-gray-400'>
              Dashboard (Student)
            </Link>
          )}
          <Link href='/about' className='mr-5 hover:text-gray-400'>
            About
          </Link>
        </nav>
        {isUserLoggedIn ? (
          <div className='relative'>
            <button
              onClick={toggleDropdown}
              className='inline-flex items-center focus:outline-none'
            >
              {/* Replace with user's profile picture */}
              <img
                src='data:image/jpeg;base64,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' // Replace with the path to the user's profile picture
                alt='User profile'
                className='w-10 h-10 rounded-full'
              />
            </button>
            {dropdownOpen && (
              <div className='absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20'>
                <Link href='/settings'>
                  <div className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Settings
                  </div>
                </Link>
                <div
                  onClick={handleLogout}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
                >
                  Log Out
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            href='/login'
            className='inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-secondary rounded text-base mt-4 md:mt-0'
          >
            Log In
            {/* SVG icon for login */}
          </Link>
        )}
      </div>
    </header>
  );
}
