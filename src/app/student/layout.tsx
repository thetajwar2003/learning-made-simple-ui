import Sidebar from '@/components/Sidebar';
import React from 'react';

interface StudentDashboardLayoutProps {
  children: React.ReactNode;
}

export default function StudentDashboardLayout({
  children,
}: StudentDashboardLayoutProps) {
  return (
    <div className='flex'>
      <Sidebar userType='Student' />
      <div className='w-5/6 flex justify-center'>
        <div className='w-full max-w-7xl mx-auto'>{children}</div>
      </div>
    </div>
  );
}
