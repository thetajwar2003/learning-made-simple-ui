import React from 'react';
import students from '../mock/student.json';
import PeopleCard from '@/components/CustomCards/PeopleCard';

interface CourseProps {
  classCode: string;
}

export default function Students({ classCode }: CourseProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {students.map((s, index) => (
        <PeopleCard key={index} {...s} classCode={classCode} />
      ))}
    </div>
  );
}
