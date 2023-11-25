"use client";
import Tabs from "@/components/Tabs/CoursePageTabs";
import Posts from "@/sections/Posts";
import React, { useState } from "react";

export default function StudentCoursePage() {
  const [currentTab, setCurrentTab] = useState("posts");

  return (
    <div className="p-4 sm:ml-64 h-screen">
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab == "posts" && <Posts />}
    </div>
  );
}
