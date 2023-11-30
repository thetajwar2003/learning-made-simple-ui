import React from "react";

interface CourseListCardProps {
  bannerURL: string;
  courseName: string;
  teacher: string;
}

export default function CourseListCard({
  bannerURL,
  courseName,
  teacher,
}: CourseListCardProps) {
  return (
    <>
      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={bannerURL}
          alt="blog"
          id="course-banner"
        />
        <div className="p-6">
          <h1
            className="title-font text-lg font-medium text-black mb-3"
            id="course-name"
          >
            {courseName}
          </h1>
          <p className="text-gray-700" id="course-teacher">
            {teacher}
          </p>
        </div>
      </div>
    </>
  );
}
