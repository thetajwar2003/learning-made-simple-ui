'use client';
import React from 'react';
import courses from '../../mock/courses.json';
import Link from 'next/link';
import CourseListCard from '@/components/CustomCards/CourseListCard';

// TODO: Get teacher info and look up courses based on that

export default function TeacherDashboard() {
  return (
    <div className='p-4 h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {courses.map((course, index) => (
          <div
            key={index}
            className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'
          >
            <Link
              href={`/teacher/${course.courseID}`}
              id={`course-list-card-${index}`}
            >
              <CourseListCard
                bannerURL={course.bannerURL}
                teacher={course.teacher}
                courseName={course.courseName}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
