import React, { useState } from "react";
import UserHero from "../CustomHero/UserHero";
import { displayDateOrTime } from "../../../utils/getDateOrTime";

interface ShowCommentsProps {
  comments: any[];
}

export default function ShowComments({ comments }: ShowCommentsProps) {
  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <button onClick={handleShowComments} disabled={comments.length == 1}>
        <h2 className="text-sm font-bold m-2">{comments.length} Comments</h2>
      </button>
      {showComments ? (
        comments.map((c) => (
          <>
            <UserHero size="14" key={c.id}>
              <div className="flex-grow">
                <h2 className="text-white title-font text-sm">{c.poster}</h2>
                <h3 className="text-gray-500 text-xs pb- mb-2">
                  {displayDateOrTime(c.timestamp)}
                </h3>
                <h1 className="text-md text-white pb-4 leading-none">
                  {c.body}
                </h1>
              </div>
            </UserHero>
          </>
        ))
      ) : (
        <>
          <UserHero
            size="14"
            key={comments[comments.length - 1]?.id}
            comment={true}
          >
            <div className="flex-grow">
              <h2 className="text-white title-font text-sm">
                {comments[comments.length - 1]?.poster}
              </h2>
              <h3 className="text-gray-500 text-xs pb-4 mb-4">
                {displayDateOrTime(comments[comments.length - 1]?.timestamp)}
              </h3>
              <h1 className="text-md text-white leading-none">
                {comments[comments.length - 1]?.body}
              </h1>
            </div>
          </UserHero>
        </>
      )}
    </>
  );
}
