"use client";
import React, { ReactNode } from "react";

interface UserHeroProps {
  size?: string;
  comment?: boolean;
  assignment?: boolean;
  children: ReactNode;
}

export default function UserHero({
  size = "16",
  comment = false,
  assignment = false,
  children,
}: UserHeroProps) {
  return (
    <>
      <div
        className={`h-full flex ${comment ? "items-start" : "items-center"} ${
          assignment ? null : "mb-4"
        }`}
      >
        <img
          alt="team"
          className={`w-${size} h-${size} object-cover object-center flex-shrink-0 rounded-full mr-4 p-2`}
          src="https://dummyimage.com/40x40"
        />
        {children}
      </div>
    </>
  );
}
