import React from "react";
import UserHero from "../CustomHero/UserHero";

interface AssignmentCardProps {
  id: string;
  body: string;
  timestamp: string;
  originalPoster: string;
  assignmentTitle: string;
}

export default function AssignmentCard({
  id,
  body,
  timestamp,
  originalPoster,
  assignmentTitle,
}: AssignmentCardProps) {
  return (
    <div className="p-2 w-full" key={id}>
      <div className="w-full p-2 rounded-lg border-2 border-secondary flex flex-col relative overfow-hidden">
        <UserHero assignment={true}>
          <div className="flex-grow">
            <h2 className="text-white title-font text-sm">
              {originalPoster} posted a new assignment: {assignmentTitle}
            </h2>
            <h3 className="text-gray-500 text-xs">{timestamp}</h3>
          </div>
        </UserHero>
      </div>
    </div>
  );
}
