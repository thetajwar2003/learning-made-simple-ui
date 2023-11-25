"use client";
import PostCard from "@/components/CustomCards/PostCard";
import ClassCodeCard from "@/components/CustomCards/ClassCodeCard";
import React from "react";

export default function Posts() {
  const data = {
    classCode: "3nmf91",
  };

  const handleAnnouncementModal = () => {};
  const posts = [
    {
      id: "1",
      body: "Your post content goes here...",
      timestamp: "November 22, 2023",
      originalPoster: "TEACH #01",
      comments: [],
    },
    // ...more posts
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col">
          <ClassCodeCard code={data.classCode} />
        </div>

        {/* SECTION: announcement  */}
        <div className="col-span-2 flex flex-col w-full">
          <button
            className="p-2 w-full  justify-start text-left"
            onClick={handleAnnouncementModal}
          >
            <div className="h-full flex items-center border-gray-800 border p-2 rounded-lg">
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
            </div>
          </button>
          <>
            {posts.map((item) => (
              <PostCard {...item} />
            ))}
          </>
        </div>
      </div>
    </>
  );
}
