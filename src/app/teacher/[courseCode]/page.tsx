import Tabs from "@/components/Tabs/CoursePageTabs";
import React from "react";

interface TeacherCoursePageProps {
  params: { slug: string };
}

export default function TeacherCoursePage({ params }: TeacherCoursePageProps) {
  return (
    <div className="p-4 sm:ml-64">
      {" "}
      <Tabs />{" "}
    </div>
  );
}
