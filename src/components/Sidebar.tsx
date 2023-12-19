"use client";
import React from "react";
import Link from "next/link";
import {
  IoNotificationsOutline,
  IoMailOutline,
  IoCalendarOutline,
  IoHelpBuoyOutline,
  IoGlobeOutline,
  IoPersonOutline,
  IoBookOutline,
  IoSpeedometerOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { usePathname } from "next/navigation";
import { extractRole } from "../../utils/extractFromString";

export default function Sidebar() {
  const pathname = usePathname();
  const role = extractRole(pathname);

  return (
    <div className="h-screen w-1/6 bg-gray-800 text-white" id="sidebar">
      <div className="p-4">
        <ul>
          <li className="py-2">
            <Link
              href={`/${role}`}
              className="flex items-center p-2 rounded-lg group hover:bg-primary hover:text-white"
              id="all-courses"
            >
              <IoBookOutline className="w-5 h-5" />
              <span className="ml-3">All Courses</span>
            </Link>
          </li>
          <li className="py-2">
            <Link
              href={`/${role}/dashboard`}
              className="flex items-center p-2 rounded-lg group hover:bg-primary hover:text-white"
              id="dashboard"
            >
              <IoSpeedometerOutline className="w-5 h-5" />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li className="py-2">
            <Link
              href={`/${role}/notifications`}
              className="flex items-center p-2 rounded-lg group hover:bg-primary hover:text-white"
            >
              <IoNotificationsOutline className="w-5 h-5" />
              <span className="ml-3">Notifications</span>
            </Link>
          </li>
          <li className="py-2">
            <Link
              href={`/${role}/messages`}
              className="flex items-center p-2 rounded-lg group hover:bg-primary hover:text-white"
            >
              <IoMailOutline className="w-5 h-5" />
              <span className="ml-3">Messages</span>
            </Link>
          </li>
          <li className="py-2">
            <Link
              href={`/${role}/calendar`}
              className="flex items-center p-2 rounded-lg group hover:bg-primary hover:text-white"
            >
              <IoCalendarOutline className="w-5 h-5" />
              <span className="ml-3">Calendar</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Gray line */}
      <div className="border-t border-gray-600 my-4"></div>

      <div>
        <ul>
          {/* New Links Below Gray Line */}
          <li className="py-2">
            <Link
              href="/support"
              className="flex items-center p-2 rounded-lg group hover:bg-green-800 mx-3 hover:text-white"
            >
              <IoHelpBuoyOutline className="w-5 h-5" />
              <span className="ml-3">Support</span>
            </Link>
          </li>

          {/* profile page */}
          <li className="py-2">
            <Link
              href="/profile"
              className="flex items-center p-2 rounded-lg group hover:bg-green-800 mx-3 hover:text-white"
            >
              <IoPersonOutline className="w-5 h-5" />
              <span className="ml-3">Profile</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Sign Out button */}
      <div className="mt-auto">
        <Link
          href="/"
          // onClick={handleSignOut}
          className="flex items-center p-2 rounded-lg group hover:bg-red-500 hover:text-white mx-2"
        >
          <IoLogOutOutline className="w-5 h-5" />

          <span className="ml-3">Sign Out</span>
        </Link>
      </div>
    </div>
  );
}
