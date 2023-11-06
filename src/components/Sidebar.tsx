import React from "react";

export default function Sidebar() {
  return (
    <div className="h-screen w-1/6 bg-gray-800 text-white">
      <div className="p-4">
        {/* Sidebar content goes here */}
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="py-2">Link 1</li>
          <li className="py-2">Link 2</li>
          <li className="py-2">Link 3</li>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>
    </div>
  );
}
