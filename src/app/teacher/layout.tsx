import Sidebar from "@/components/Sidebar";
import React from "react";

interface TeacherDashboardLayout {
  children: React.ReactNode;
}

export default function TeacherDashboardLayout({
  children,
}: TeacherDashboardLayout) {
  return (
    <>
      <Sidebar userType="Teacher" />
      {children}
    </>
  );
}
