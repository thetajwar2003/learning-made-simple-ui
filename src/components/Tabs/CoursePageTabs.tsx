"use client";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect } from "react";

interface CoursePageTabsProps {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
}

export default function CoursePageTabs({
  currentTab,
  setCurrentTab,
}: CoursePageTabsProps) {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) handleTab(hash);
  }, []);

  const handleTab = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab; // Update URL hash
  };
  const highlighted =
    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider border-indigo-500 bg-gray-800 text-white rounded-t";
  const normal =
    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start  title-font font-medium inline-flex items-center leading-none border-gray-800 hover:text-white tracking-wider";

  return (
    <div className="w-full border-b-2 border-gray-800 mb-5">
      <div className="flex mx-auto flex-wrap  ">
        <Link
          href="#posts"
          onClick={() => {
            handleTab("posts");
          }}
          className={currentTab == "posts" ? highlighted : normal}
          id="posts"
        >
          Posts
        </Link>
        <Link
          href="#assignments"
          onClick={() => {
            handleTab("assignments");
          }}
          className={currentTab == "assignments" ? highlighted : normal}
          id="assignments"
        >
          Assignments
        </Link>
        <Link
          href="#students"
          onClick={() => {
            handleTab("students");
          }}
          className={currentTab == "students" ? highlighted : normal}
          id="students"
        >
          Students
        </Link>
        <Link
          href="#grades"
          onClick={() => {
            handleTab("grades");
          }}
          className={currentTab == "grades" ? highlighted : normal}
          id="grades"
        >
          Grades
        </Link>
      </div>
    </div>
  );
}
