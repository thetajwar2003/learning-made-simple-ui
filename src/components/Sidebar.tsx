'use client';
import React from 'react';
import Link from 'next/link';
import {
  IoNotificationsOutline,
  IoMailOutline,
  IoCalendarOutline,
  IoLibraryOutline,
  IoPeopleOutline,
  IoHelpBuoyOutline,
  IoMegaphoneOutline,
  IoDocumentTextOutline,
  IoGlobeOutline,
  IoPersonOutline,
  IoBookOutline,
  IoSpeedometerOutline,
  IoLogOutOutline,
} from 'react-icons/io5';
interface SidebarProps {
  userType: 'Student' | 'Teacher';
}

export default function Sidebar({ userType }: SidebarProps) {
  const allCoursesHref = userType === 'Student' ? '/student' : '/teacher';

  return (
    <div className='h-screen w-1/6 bg-gray-800 text-white' id='sidebar'>
      <div className='p-4'>
        {/* Sidebar content goes here */}
        <h2 className='text-xl font-bold mb-4' id='sidebar-title'>
          {userType} Menu
        </h2>
        <ul>
          <li className='py-2'>
            <Link
              href={allCoursesHref}
              className='flex items-center p-2 rounded-lg group hover:bg-primary hover:text-white'
              id='all-courses'
            >
              <IoBookOutline className='w-5 h-5' />
              <span className='ml-3'>All Courses</span>
            </Link>
          </li>
          <li className='py-2'>
            <Link
              href='/dashboard'
              className='flex items-center p-2 rounded-lg group hover:bg-primary hover:text-white'
              id='dashboard'
            >
              <IoSpeedometerOutline className='w-5 h-5' />
              <span className='ml-3'>Dashboard</span>
            </Link>
          </li>
          <li className='py-2'>
            <Link
              href='/notifications'
              className='flex items-center p-2 rounded-lg group hover:bg-primary hover:text-white'
            >
              <IoNotificationsOutline className='w-5 h-5' />
              <span className='ml-3'>Notifications</span>
            </Link>
          </li>
          <li className='py-2'>
            <Link
              href='/messages'
              className='flex items-center p-2 rounded-lg group hover:bg-primary hover:text-white'
            >
              <IoMailOutline className='w-5 h-5' />
              <span className='ml-3'>Messages</span>
            </Link>
          </li>
          <li className='py-2'>
            <Link
              href='/calendar'
              className='flex items-center p-2 rounded-lg group hover:bg-primary hover:text-white'
            >
              <IoCalendarOutline className='w-5 h-5' />
              <span className='ml-3'>Calendar</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Gray line */}
      <div className='border-t border-gray-600 my-4'></div>

      <div>
        <ul>
          {/* New Links Below Gray Line */}
          <li className='py-2'>
            <Link
              href='/support'
              className='flex items-center p-2 rounded-lg group hover:bg-green-800 mx-3 hover:text-white'
            >
              <IoHelpBuoyOutline className='w-5 h-5' />
              <span className='ml-3'>Support</span>
            </Link>
          </li>

          <li className='py-2'>
            <Link
              href='/language'
              className='flex items-center p-2 rounded-lg group hover:bg-green-800 mx-3 hover:text-white'
            >
              <IoGlobeOutline className='w-5 h-5' />
              <span className='ml-3'>Language</span>
            </Link>
          </li>
          <li className='py-2'>
            <Link
              href='/profile'
              className='flex items-center p-2 rounded-lg group hover:bg-green-800 mx-3 hover:text-white'
            >
              <IoPersonOutline className='w-5 h-5' />
              <span className='ml-3'>Profile</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Sign Out button */}
      <div className='mt-auto'>
        <Link
          href='./'
          // onClick={handleSignOut}
          className='flex items-center p-2 rounded-lg group hover:bg-red-500 hover:text-white mx-2'
        >
          <IoLogOutOutline className='w-5 h-5' />

          <span className='ml-3'>Sign Out</span>
        </Link>
      </div>
    </div>
  );
}
