'use client';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import Courses from './courses';
import Dashboard from './dashboard';

function Teacher() {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'courses':
        return <Courses />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div>
      <Header />
      <Sidebar setActiveComponent={setActiveComponent} />
      {renderComponent()}
    </div>
  );
}

export default Teacher;
