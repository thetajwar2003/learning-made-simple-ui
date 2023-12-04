import Sidebar from '@/components/Sidebar';
import React from 'react';

interface TeacherDashboardLayout {
  children: React.ReactNode;
}

export default function TeacherDashboardLayout({
  children,
}: TeacherDashboardLayout) {
  return (
    <div className='flex'>
      <Sidebar userType='Teacher' />
      <div className='w-5/6 flex justify-center'>
        <div className='w-full max-w-7xl mx-auto'>{children}</div>
      </div>
    </div>
  );
}
