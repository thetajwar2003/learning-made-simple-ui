import React, { useState, useEffect } from "react";

import PostCard from "@/components/CustomCards/PostCard";
import ClassCodeCard from "@/components/CustomCards/ClassCodeCard";
import CreateAnnouncementCard from "@/components/CustomCards/AnnouncementCard";
import posts from "@/mock/posts.json";

import { API, Amplify } from "aws-amplify";

import awsExports from "../aws-exports"; // The path to your aws-exports file
Amplify.configure(awsExports);

interface course {
  classCode: string;
}

// TODO: Use AWS Amplify to fetch posts from the database using the classCode

export default function Posts({ classCode }: course) {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await API.get("apilms", "/posts", {});
        console.log(apiData);
        setPost(apiData);
      } catch (err: any) {
        setError(err);
        console.log("error fetching data..", err);
      }
    };

    fetchData();
  }, []);

  const data = {
    classCode: classCode,
  };

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        <div className="flex flex-col">
          <ClassCodeCard code={data.classCode} />
        </div>

        <div className="col-span-4 flex flex-col w-full">
          <CreateAnnouncementCard classCode={classCode} />
          {posts.map((item, index) => (
            <PostCard {...item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
