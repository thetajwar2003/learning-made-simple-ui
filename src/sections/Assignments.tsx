'use client';
import React from 'react';

import AssignmentCard from '@/components/CustomCards/AssignmentCard';
import ClassCodeCard from '@/components/CustomCards/ClassCodeCard';
import assignments from '@/mock/assignment.json'; // Assuming assignments are part of the posts.json

export default function Assignments() {
  const data = {
    classCode: '3nmf91',
  };

  return (
    <>
      <div className='grid grid-cols-5 gap-3'>
        <div className='flex flex-col'>
          <ClassCodeCard code={data.classCode} />
        </div>

        <div className='col-span-4 flex flex-col w-full'>
          {assignments.map((item, index) => (
            <AssignmentCard {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
