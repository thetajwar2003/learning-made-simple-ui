"use client";
import React from "react";

import PostCard from "@/components/CustomCards/PostCard";
import ClassCodeCard from "@/components/CustomCards/ClassCodeCard";
import AssignmentCard from "@/components/CustomCards/AssignmentCard";
import CreateAnnouncementCard from "@/components/CustomCards/AnnouncementCard";

export default function Posts() {
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
      <div className="grid grid-cols-5 gap-3">
        <div className="flex flex-col">
          <ClassCodeCard code={data.classCode} />
        </div>

        <div className="col-span-4 flex flex-col w-full">
          <CreateAnnouncementCard />
          <>
            {posts.map((item, index) => (
              <>
                {item.type == "announcement" ? (
                  <PostCard {...item} key={index} />
                ) : (
                  <AssignmentCard {...item} key={index} />
                )}
              </>
            ))}
          </>
        </div>
      </div>
    </>
  );
}
