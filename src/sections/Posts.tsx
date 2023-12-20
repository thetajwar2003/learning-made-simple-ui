"use client";
import React, { useState, useEffect } from "react";

import PostCard from "@/components/CustomCards/PostCard";
import ClassCodeCard from "@/components/CustomCards/ClassCodeCard";
import CreateAnnouncementCard from "@/components/CustomCards/AnnouncementCard";
import posts from "@/mock/posts.json";

import { API, Amplify } from "aws-amplify";

import awsExports from "../aws-exports"; // The path to your aws-exports file
import Loading from "@/components/Loading";
Amplify.configure(awsExports);

interface course {
  classCode: string;
}

export default function Posts({ classCode }: course) {
  const [post, setPost] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await API.get("apilms", "/posts", {}); //TODO change it be the specific class
        console.log(apiData);
        setPost(apiData);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        console.log("error fetching data..", err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching posts</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        <div className="flex flex-col">
          <ClassCodeCard code={classCode} />
        </div>
        {/* TODO: DISPLAY THE POSTS AND COMMENTS */}
        <div className="col-span-4 flex flex-col w-full">
          <CreateAnnouncementCard classCode={classCode} />
          {loading ? (
            <Loading message="Getting posts" />
          ) : (
            <>
              {post.map((item, index) => (
                <PostCard {...item} key={index} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
