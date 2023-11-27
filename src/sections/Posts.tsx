"use client";
import PostCard from "@/components/CustomCards/PostCard";
import ClassCodeCard from "@/components/CustomCards/ClassCodeCard";
import React from "react";
import AssignmentCard from "@/components/CustomCards/AssignmentCard";
import UserHero from "@/components/CustomHero/UserHero";

export default function Posts() {
  const handleAnnouncementModal = () => {};

  const data = {
    classCode: "3nmf91",
  };
  const posts = [
    // TODO: can be sorted when queried from dynamodb -> make timestamp the sort key
    {
      id: "2",
      body: "Post content with comments",
      timestamp: "9:39 PM",
      type: "announcement",
      originalPoster: "TEACH #01",
      comments: [
        {
          id: "2.1",
          body: "This is a comment",
          timestamp: "10:00 PM",
          poster: "TEACH #01",
        },
        {
          id: "2.2",
          body: "This is latest comment",
          timestamp: "11:00 PM",
          poster: "TEACH #01",
        },
      ],
      assignmentTitle: "",
    },
    {
      id: "1",
      body: "Your post content goes here...",
      timestamp: "November 22, 2023",
      type: "announcement",
      originalPoster: "TEACH #01",
      comments: [],
      assignmentTitle: "",
    },
    {
      id: "0",
      body: "Your post content goes here...",
      timestamp: "November 19, 2023",
      type: "assignment",
      originalPoster: "TEACH #01",
      comments: [],
      assignmentTitle: "HW #2",
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
            className="p-2 w-full justify-start text-left bg-gray-800 rounded-lg"
            onClick={handleAnnouncementModal}
            id="make-announcement-card"
          >
            <UserHero>
              <div className="flex-grow">
                <h2 className="text-white title-font text-sm">
                  Announce something to your class
                </h2>
              </div>
            </UserHero>
          </button>
          <>
            {/* TODO ERROR HERE */}
            {posts.map((item) => (
              <>
                {item.type == "announcement" ? (
                  <PostCard {...item} />
                ) : (
                  <AssignmentCard {...item} />
                )}
              </>
            ))}
          </>
        </div>
      </div>
    </>
  );
}
