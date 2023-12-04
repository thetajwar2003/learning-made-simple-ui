'use client';
import { useParams } from 'next/navigation';
import CoursePageTabs from '@/components/Tabs/CoursePageTabs';
import Posts from '@/sections/Posts';
import Assignments from '@/sections/Assignments';
import Grades from '@/sections/Grades';
import Students from "@/sections/Students";
import React, { useState, useEffect } from 'react';


export default function StudentCoursePage() {
  const [currentTab, setCurrentTab] = useState('posts');
  const params = useParams();
  let courseCode = params.courseCode;

  // Ensure courseCode is a string
  if (Array.isArray(courseCode)) {
    courseCode = courseCode[0];
  }

  return (
    <div className='p-4 h-screen '>
      <CoursePageTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 'posts' && <Posts classCode={courseCode} />}
      {currentTab === 'assignments' && <Assignments classCode={courseCode} />}
      {currentTab == "students" && <Students />}
      {currentTab === 'grades' && <Grades classCode={courseCode} />}
    </div>
  );
}
