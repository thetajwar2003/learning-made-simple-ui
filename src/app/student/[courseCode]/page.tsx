import React from "react";

interface CoursePageProps {
  params: { slug: string };
}

export default function CoursePage({ params }: CoursePageProps) {
  return <div className="p-4 sm:ml-64">Course Code: {params.slug}</div>;
}
