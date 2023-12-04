"use client";
import React from "react";

interface SidebarProps {
  userType: "Student" | "Teacher";
}

export default function Sidebar({ userType }: SidebarProps) {
  return (
    <div
      className="h-screen w-1/6 bg-gray-800 text-white absolute"
      id="sidebar"
    >
      <div className="p-4">
        {/* Sidebar content goes here */}
        <h2 className="text-xl font-bold mb-4" id="sidebar-title">
          {userType} Menu
        </h2>
        <ul>
          <li className="py-2">
            <a
              href="#"
              className="flex items-center p-2 rounded-lg group hover:bg-primary hover:text-white"
              id="dashboard"
              // onClick={() => setActiveComponent("courses")}
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li className="py-2">
            <a
              href="#"
              className="flex items-center p-2 roueded-lg group hover:bg-primary hover:text-white"
              // onClick={() => setActiveComponent("courses")}
              id="all-courses"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
              </svg>
              <span className="ml-3">All Courses</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
