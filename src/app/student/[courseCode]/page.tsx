"use client";
import CoursePageTabs from "@/components/Tabs/CoursePageTabs";
import Posts from "@/sections/Posts";
import Students from "@/sections/Students";
import React, { useState } from "react";

export default function StudentCoursePage() {
  const [currentTab, setCurrentTab] = useState("posts");

  return (
    <div className="p-4 sm:ml-40 lg:ml-64 lg:ml-128 h-screen">
      <CoursePageTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab == "posts" && <Posts />}
      {currentTab == "students" && <Students />}
    </div>
  );
}
