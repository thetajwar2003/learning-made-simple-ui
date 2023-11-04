'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isLoggedIn, logOut } from '../auth/auth'; // Adjust the import path as necessary

export default function Header() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
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
      setIsUserLoggedIn(false); // Update the state to reflect that the user has logged out
      router.push('/'); // Redirect to the home page after logging out
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className='text-white bg-black body-font top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link
          href='/'
          className='flex title-font font-medium items-center text-white mb-4 md:mb-0'
        >
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
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link href='/first-link' className='mr-5 hover:text-gray-400'>
            First Link
          </Link>
          <Link href='/second-link' className='mr-5 hover:text-gray-400'>
            Second Link
          </Link>
          <Link href='/third-link' className='mr-5 hover:text-gray-400'>
            Third Link
          </Link>
          <Link href='/fourth-link' className='mr-5 hover:text-gray-400'>
            Fourth Link
          </Link>
          {isUserLoggedIn && (
            <Link href='/dashboard' className='mr-5 hover:text-gray-400'>
              Dashboard
            </Link>
          )}
        </nav>
        {isUserLoggedIn ? (
          <button
            onClick={handleLogout}
            className='inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-secondary rounded text-base mt-4 md:mt-0'
          >
            Log Out
            {/* SVG icon for logout */}
          </button>
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
