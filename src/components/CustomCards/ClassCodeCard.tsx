import React from "react";

interface ClassCodeCardProps {
  code: string;
}

export default function ClassCodeCard({ code }: ClassCodeCardProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex justify-between items-center">
      <div>
        <h2 className="text-sm text-gray-300 mb-2">Class code</h2>
        <p className="text-lg font-bold">{code}</p>
      </div>
      <button className="text-gray-300">
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-outlined/24/000000/copy.png"
          alt="copy"
          onClick={handleCopy}
        />
      </button>
    </div>
  );
}
