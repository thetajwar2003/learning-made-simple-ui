import React, { useState } from 'react';

import AssignmentCard from '@/components/CustomCards/AssignmentCard';
import ClassCodeCard from '@/components/CustomCards/ClassCodeCard';
import SubmittedCard from '@/components/CustomCards/SubmittedCard';
import CreateAnnouncementCard from '@/components/CustomCards/AnnouncementCard';
import assignments from '@/mock/assignment.json';
import { is } from 'cypress/types/bluebird';

interface course {
  classCode: string;
}

export default function Assignments({ classCode }: course) {
  const [isCreatingAssignment, setIsCreatingAssignment] = useState(false);

  // TODO: Use AWS Amplify to fetch assignments from the database using the classCode
  const data = {
    classCode: classCode,
  }; 

  const userType = 'Teacher'; // TODO: Get the user type from the database

  const handleCreateAssignment = () => {
    setIsCreatingAssignment(true);
    console.log(isCreatingAssignment);
  };

  return (
    <>
      <div className='grid grid-cols-5 gap-3'>
        <div className='flex flex-col'>
          <ClassCodeCard code={data.classCode} />
        </div>
        {/* new assignment */}
        <div className='col-span-4 flex flex-col w-full'>
          {userType === 'Teacher' && (
            <div className='p-2 w-full'>
              <div className='flex justify-end items-center'>
                <button
                  onClick={handleCreateAssignment}
                  className='bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2 transition-colors duration-200 ease-in-out text-lg'
                >
                  Create New Assignment
                </button>
              </div>
            </div>
          )}

          {isCreatingAssignment && (
            <CreateAnnouncementCard
              userType={userType}
              isOpen={isCreatingAssignment}
              setIsOpen={setIsCreatingAssignment}
            />
          )}

          {/* student or teacher assignment card */}
          {assignments.map((item, index) =>
            userType === 'Teacher' ? (
              <SubmittedCard {...item} key={index} />
            ) : (
              <AssignmentCard {...item} key={index} />
            )
          )}
        </div>
      </div>
    </>
  );
}
