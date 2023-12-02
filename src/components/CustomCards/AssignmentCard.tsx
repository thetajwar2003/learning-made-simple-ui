import React from 'react';
import UserHero from '../CustomHero/UserHero';

interface AssignmentCardProps {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  postedDate: string;
  teacher: {
    name: string;
    profilePicUrl: string;
  };
  fileUrls?: string[];
}

export default function AssignmentCard({
  id,
  title,
  description,
  dueDate,
  postedDate,
  teacher,
  fileUrls = [],
}: AssignmentCardProps) {
  return (
    <div className='p-2 w-full' key={id}>
      <div className='w-full p-2 rounded-lg border-2 border-secondary flex flex-col relative overflow-hidden'>
        <UserHero assignment={true} profilePicUrl={teacher.profilePicUrl}>
          {' '}
          {/* Pass the teacher's profile picture URL */}
          <div className='flex-grow'>
            <h2 className='text-white title-font text-[1.5rem]'>{title}</h2>
            <h3 className='text-gray-400 text-s'>Due Date: {dueDate}</h3>
            <p className='text-gray-500'>{description}</p>
            {fileUrls.map((url, index) => (
              <a
                key={index}
                href={url}
                className='text-blue-500 hover:underline'
              >
                Download File {index + 1}
                <br />
              </a>
            ))}
          </div>
        </UserHero>
      </div>
    </div>
  );
}
