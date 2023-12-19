import Sidebar from "@/components/Sidebar";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6 flex justify-center">
        <div className="w-full max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
