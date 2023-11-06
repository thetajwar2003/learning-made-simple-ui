import Sidebar from "@/components/Sidebar";
import React from "react";

interface StudentDashboardLayout {
  children: React.ReactNode;
}

export default function StudentDashboardLayout({
  children,
}: StudentDashboardLayout) {
  return (
    <>
      <Sidebar userType="Student" />
      {children}
    </>
  );
}
