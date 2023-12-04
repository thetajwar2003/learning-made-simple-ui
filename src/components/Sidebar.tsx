'use client';
import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  userType: 'Student' | 'Teacher';
}

export default function Sidebar({ userType }: SidebarProps) {
  // Define the href based on the user type
  const allCoursesHref = userType === 'Student' ? '/student' : '/teacher';

  // TODO: Handle the sign out button
  // function handleSignOut() {}

  return (
    <div className='h-screen w-1/6 bg-gray-800 text-white' id='sidebar'>
      <div className='p-4'>
        {/* Sidebar content goes here */}
        <h2 className='text-xl font-bold mb-4' id='sidebar-title'>
          {userType} Menu
        </h2>
        <ul>
          <li className='py-2'>
            <a
              href='/dashboard'
              className='flex items-center p-2 rounded-lg group hover:bg-primary hover:text-white'
              id='dashboard'
            >
              <svg
                className='w-5 h-5 text-gray-500 transition duration-75  group-hover:text-white '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 21'
              >
                <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
              </svg>
              <span className='ml-3'>Dashboard</span>
            </a>
          </li>
          <li className='py-2'>
            <Link
              href={allCoursesHref} // Set the href based on the user type
              className='flex items-center p-2 rounded-lg group hover:bg-primary hover:text-white'
              id='all-courses'
            >
              <svg
                className='w-5 h-5 text-gray-500 transition duration-75  group-hover:text-white '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 21'
              >
                <path d='M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z' />
              </svg>
              <span className='ml-3'>All Courses</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Gray line */}
      <div className='border-t border-gray-600 my-4'></div>

      {/* Sign Out button */}
      <div className='mt-auto'>
        <Link
          href='./'
          // onClick={handleSignOut}
          className='flex items-center p-2 rounded-lg group hover:bg-red-500 hover:text-white mx-2'
        >
          <svg
            width='23px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M19 23H11C10.4477 23 10 22.5523 10 22C10 21.4477 10.4477 21 11 21H19C19.5523 21 20 20.5523 20 20V4C20 3.44772 19.5523 3 19 3L11 3C10.4477 3 10 2.55229 10 2C10 1.44772 10.4477 1 11 1L19 1C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23Z'
              fill='gray'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M2.48861 13.3099C1.83712 12.5581 1.83712 11.4419 2.48862 10.6902L6.66532 5.87088C7.87786 4.47179 10.1767 5.32933 10.1767 7.18074L10.1767 9.00001H16.1767C17.2813 9.00001 18.1767 9.89544 18.1767 11V13C18.1767 14.1046 17.2813 15 16.1767 15L10.1767 15V16.8193C10.1767 18.6707 7.87786 19.5282 6.66532 18.1291L2.48861 13.3099ZM4.5676 11.3451C4.24185 11.7209 4.24185 12.2791 4.5676 12.6549L8.1767 16.8193V14.5C8.1767 13.6716 8.84827 13 9.6767 13L16.1767 13V11L9.6767 11C8.84827 11 8.1767 10.3284 8.1767 9.50001L8.1767 7.18074L4.5676 11.3451Z'
              fill='gray'
            />
          </svg>
          <span className='ml-3'>Sign Out</span>
        </Link>
      </div>
    </div>
  );
}
