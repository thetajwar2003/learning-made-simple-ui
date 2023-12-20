import React from "react";

interface LoadingProps {
  message: string;
}

export default function Loading({ message }: LoadingProps) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white-900"></div>
      <p className="text-lg mt-4">{message}</p>
    </div>
  );
}
