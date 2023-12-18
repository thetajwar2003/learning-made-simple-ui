import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

interface StudentDashboardLayoutProps {
  children: React.ReactNode;
}

export default function StudentDashboardLayout({
  children,
}: StudentDashboardLayoutProps) {
  return (
    <>
      <Header />
      <div className=''>{children}</div>
      <div className='pt-48'>
        <Footer />
      </div>{' '}
    </>
  );
}
