import React from 'react';

interface CourseListCardProps {
  bannerURL: string;
  courseName: string;
  teacher: string;
  classTimes: string[];
  courseID: string;
}

export default function CourseListCard({
  bannerURL,
  courseName,
  teacher,
  classTimes,
  courseID,
}: CourseListCardProps) {
  return (
    <div
      className='h-full border-2 border-gray-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200 hover:border-gray-600'
      id={`course-card-${courseID}`}
    >
      <div>
        <img
          className='lg:h-48 md:h-36 w-full object-cover object-center'
          src={bannerURL}
          alt='course banner'
          id='course-banner'
        />
      </div>
      <div className='p-4'>
        <h1
          className='title-font text-lg font-bold text-gray-900 mb-2 hover:text-gray-800'
          id='course-name'
        >
          {courseName}
        </h1>
        <p
          className='text-gray-800 font-semibold mb-3 hover:text-gray-700'
          id='course-teacher'
        >
          Instructor: {teacher}
        </p>
        <ul className='text-gray-700 mb-3' id='class-times'>
          {classTimes.map((time, index) => (
            <li key={index} className='text-sm hover:text-gray-600'>
              {time}
            </li>
          ))}
        </ul>
        <p className='text-gray-600 text-sm' id='course-id'>
          <span className='font-bold'>Course ID</span>: {courseID}
        </p>
      </div>
    </div>
  );
}
