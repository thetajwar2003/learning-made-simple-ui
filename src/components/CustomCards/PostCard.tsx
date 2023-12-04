"use client";
import React, { ChangeEvent, useState } from "react";
import UserHero from "../CustomHero/UserHero";
import ShowComments from "../Comments/ShowComments";

import { API, Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);

interface PostCardProps {
  id: string;
  classCode?: string;
  file?: string[];
  link?: string;
  body: string;
  timestamp: string;
  originalPoster: string;
  comments?: any[];
}

export default function PostCard({
  id,
  body,
  timestamp,
  originalPoster,
  comments,
}: PostCardProps) {
  const [comment, setComment] = useState("");

  const handlePostComment = async () => {
    try {
      // const { success, data } = await API.post("apilms", `/posts/${id}`, {
      const { success, data } = await API.put(
        "apilms",
        `/posts/660a0e61-26e9-46b3-8d83-7107fae8e321`,
        {
          body: {
            newComment: {
              body: comment,
              poster: "changeLater",
              timestamp: new Date().toISOString(),
            },
          },
        }
      );
      console.log(success, data);
    } catch (error) {
      throw error;
    }
  };

  const handleInputComment = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  return (
    <div className="p-2 w-full" key={id}>
      <div className="w-full p-2 rounded-lg border-2 border-secondary flex flex-col relative overflow-hidden">
        {/* SECTION: User pfp name and timestamp */}
        <UserHero>
          <div className="flex-grow">
            <h2 className="text-white title-font text-sm">{originalPoster}</h2>
            <h3 className="text-gray-500 text-xs">{timestamp}</h3>
          </div>
        </UserHero>

        {/* SECTION: body */}
        <h1 className="text-md text-white pb-4 mb-4 border-b border-gray-800 leading-none">
          {body}
        </h1>

        {/* SECTION: show comments */}
        {comments!.length > 0 && <ShowComments comments={comments!} />}

        {/* SECTION: create comment */}
        <UserHero size="14">
          <div className="flex-grow">
            <input
              className="rounded-xl w-full bg-transparent shadow-sm placeholder-slate-400 border border-white p-2"
              placeholder="Add comment"
              onChange={handleInputComment}
              value={comment}
            />
          </div>
          <button onClick={handlePostComment}>
            <img
              width="26"
              height="26"
              src="https://img.icons8.com/material-sharp/26/FFFFFF/sent.png"
              alt="sent"
              className="m-2"
            />
          </button>
        </UserHero>
      </div>
    </div>
  );
}
