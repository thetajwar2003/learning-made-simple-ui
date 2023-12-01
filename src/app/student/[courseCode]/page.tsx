'use client';
import CoursePageTabs from '@/components/Tabs/CoursePageTabs';
import Posts from '@/sections/Posts';
import React, { useState } from 'react';

export default function StudentCoursePage() {
  const [currentTab, setCurrentTab] = useState('posts');

  return (
    <div className='p-4 h-screen '>
      <CoursePageTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab == 'posts' && <Posts />}
    </div>
  );
}
