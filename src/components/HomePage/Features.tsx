'use client';
import React from 'react';
import FeatureCard from './FeatureCard';
import { GiTeacher, GiTeamIdea, GiChecklist } from 'react-icons/gi';

const Features = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-wrap justify-center gap-4'>
        <FeatureCard
          title='Course Management'
          description='Organize courses, share materials, and streamline class management.'
          IconComponent={GiTeacher}
        />
        <FeatureCard
          title='Student Collaboration'
          description='Facilitate student interaction with forums, group projects, and peer reviews.'
          IconComponent={GiTeamIdea}
        />
        <FeatureCard
          title='Grade Tracking'
          description='Easily track and report student grades and progress.'
          IconComponent={GiChecklist}
        />
      </div>
    </div>
  );
};

export default Features;
