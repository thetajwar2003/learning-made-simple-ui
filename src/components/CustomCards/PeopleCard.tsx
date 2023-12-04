import Link from 'next/link';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Importing a user icon from react-icons

interface PeopleCardProps {
  id: string;
  cognitoId: string;
  name: string;
  dob: string;
  email: string;
  profilePictureURL: string;
  courses: string[];
  classCode: string;
}

export default function PeopleCard({
  id,
  cognitoId,
  name,
  dob,
  email,
  profilePictureURL,
  courses,
  classCode,
}: PeopleCardProps) {
  return (
    <Link href={`/teacher/${classCode}/grade/${id}`} passHref>
      <button className='hover:bg-gray-700 rounded-lg transition duration-300 w-full'>
        <div className='flex flex-col h-full border-primary border p-4 rounded-lg'>
          <div className='flex justify-center items-center mb-4'>
            <FaUserCircle className='w-16 h-16 text-gray-400 flex-shrink-0 mr-4' />
          </div>
          <div className='flex-grow'>
            <h2 className='text-white title-font font-medium'>{name}</h2>
            <p className='text-gray-400'>{id}</p>
            <p className='text-gray-400'>{email}</p>
          </div>
        </div>
      </button>
    </Link>
  );
}
