import Footer from '@/components/Footer';
import React from 'react';

// Example founder data - replace with real data
const founders = [
  {
    name: 'Nafis Khan',
    role: 'DevOps Engineer',
    image:
      'https://media.licdn.com/dms/image/D4E03AQFriBeOTvQwpQ/profile-displayphoto-shrink_800_800/0/1688502030806?e=1707350400&v=beta&t=bzvJE32T3o04L5r23X3IdfcCQgVr5Fz_a1s6IwsAJZ0',
    linkedin: 'https://www.linkedin.com/in/janedoe',
    description:
      'Full-stack and Android Engineer with multiple work followships and internships at companies like Meta, GoDaddy, etc.',
  },
  {
    name: 'Tajwar Rahman',
    role: 'Product Manager',
    image: 'https://avatars.githubusercontent.com/u/34196741?v=4',
    linkedin: 'https://www.linkedin.com/in/johnsmith',
    description:
      'Tech entrepreneur with experience as a founding engineer and experience at multiple Big Tech companies.',
  },
  {
    name: 'Mohammed Mamum',
    role: 'Technical Program Manager',
    image:
      'https://media.licdn.com/dms/image/D4E03AQGnjaep3bTfGg/profile-displayphoto-shrink_800_800/0/1693355877674?e=1707350400&v=beta&t=JkIH2X5_tg9YXgnwu3owbI9ovJ2ckDIDE7SxIEwHPtU',
    linkedin: 'https://www.linkedin.com/in/johnsmith',
    description:
      'Experienced in both Software Engineering and Machine Learning at multiple Software Engineering Companies',
  },
];

export default function Founders() {
  return (
    <>
      <main className='bg-black text-white pt-24 px-24 mb-96'>
        <div className='container mx-auto'>
          <h1 className='title-font font-bold text-4xl md:text-7xl mb-8 font-medium text-center'>
            Our Founders
          </h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-32'>
            {founders.map((founder, index) => (
              <div
                key={index}
                className='flex flex-col items-center bg-primary p-6 rounded-lg'
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className='rounded-full h-48 w-48 mb-4 object-cover' // Increased size and made it round
                />
                <h2 className='text-xl font-bold mt-3'>{founder.name}</h2>
                <p className='text-sm mb-2'>{founder.role}</p>
                <p className='text-center mb-4 mt-3'>{founder.description}</p>
                <a
                  href={founder.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white font-bold hover:text-green-800'
                >
                  LinkedIn Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
