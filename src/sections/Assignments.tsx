'use client';
import React from 'react';

import AssignmentCard from '@/components/CustomCards/AssignmentCard';
import ClassCodeCard from '@/components/CustomCards/ClassCodeCard';
import assignments from '@/mock/assignment.json'; // Assuming assignments are part of the posts.json

interface course {
  classCode: string;
}

export default function Assignments({ classCode }: course) {
  // TODO: Use AWS Amplify to fetch assignments from the database using the classCode
  const data = {
    classCode: classCode,
  };

  return (
    <>
      <div className='grid grid-cols-5 gap-3'>
        <div className='flex flex-col'>
          <ClassCodeCard code={data.classCode} />
        </div>

        <div className='col-span-4 flex flex-col w-full'>
          {assignments.map((item, index) => (
            <AssignmentCard {...item} key={index} /> // Pass the handleUpload function
          ))}
        </div>
      </div>
    </>
  );
}
