import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  IconComponent: any;
}

const FeatureCard = ({
  title,
  description,
  IconComponent,
}: FeatureCardProps) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out p-4 hover:scale-105 hover:bg-gray-800'>
      <div className='flex flex-col items-center'>
        <IconComponent className='text-4xl mb-4' />
        <div className='font-bold text-xl mb-2 text-center'>{title}</div>
        <p className='text-gray-200 text-base text-center'>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
