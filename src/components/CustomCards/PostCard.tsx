import React from "react";

interface PostCardProps {
  id: string;
  body: string;
  timestamp: string;
  originalPoster: string;
  comments: any[];
}

export default function PostCard({
  id,
  body,
  timestamp,
  originalPoster,
  comments,
}: PostCardProps) {
  return (
    <div className="p-2 w-full">
      <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
        <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
          <img
            alt="team"
            className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4 p-2"
            src="https://dummyimage.com/40x40"
          />
          <div className="flex-grow">
            <h2 className="text-white title-font text-sm">
              Announce something to your class
            </h2>
          </div>
        </h2>
        <h1 className="text-lg text-white pb-4 mb-4 border-b border-gray-800 leading-none">
          Free
        </h1>
      </div>
    </div>
  );
}
