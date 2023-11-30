"use client";
import React, { Dispatch, SetStateAction } from "react";

interface CoursePageTabsProps {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
}

export default function CoursePageTabs({
  currentTab,
  setCurrentTab,
}: CoursePageTabsProps) {
  const handleTab = (tab: string) => {
    switch (tab) {
      case "assignments":
        setCurrentTab("assignments");
        break;

      case "students":
        setCurrentTab("students");
        break;

      case "grades":
        setCurrentTab("grades");
        break;
      default:
        setCurrentTab("posts");
        break;
    }
  };
  const highlighted =
    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider border-indigo-500 bg-gray-800 text-white rounded-t";
  const normal =
    "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start  title-font font-medium inline-flex items-center leading-none border-gray-800 hover:text-white tracking-wider";

  return (
    <div className="w-full border-b-2 border-gray-800 mb-5">
      <div className="flex mx-auto flex-wrap  ">
        <button
          onClick={() => {
            handleTab("posts");
          }}
          className={currentTab == "posts" ? highlighted : normal}
          id="posts-tab"
        >
          Posts
        </button>
        <button
          onClick={() => {
            handleTab("assignments");
          }}
          className={currentTab == "assignments" ? highlighted : normal}
          id="assignments-tab"
        >
          Assignments
        </button>
        <button
          onClick={() => {
            handleTab("students");
          }}
          className={currentTab == "students" ? highlighted : normal}
          id="students-tab"
        >
          Students
        </button>
        <button
          onClick={() => {
            handleTab("grades");
          }}
          className={currentTab == "grades" ? highlighted : normal}
          id="grades-tab"
        >
          Grades
        </button>
      </div>
    </div>
  );
}
