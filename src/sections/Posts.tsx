import React from 'react';

import PostCard from '@/components/CustomCards/PostCard';
import ClassCodeCard from '@/components/CustomCards/ClassCodeCard';
import AssignmentCard from '@/components/CustomCards/AssignmentCard';
import CreateAnnouncementCard from '@/components/CustomCards/AnnouncementCard';
import posts from '@/mock/posts.json';

interface course {
  classCode: string;
}

export default function Posts({ classCode }: course) {
  const data = {
    classCode: classCode,
  };

  console.log(classCode);
  return (
    <>
      <div className='grid grid-cols-5 gap-3'>
        <div className='flex flex-col'>
          <ClassCodeCard code={data.classCode} />
        </div>

        <div className='col-span-4 flex flex-col w-full'>
          <CreateAnnouncementCard />
          {posts.map((item, index) => (
            <PostCard {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
