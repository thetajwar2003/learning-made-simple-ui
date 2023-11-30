import React from "react";

interface AttachmentCardProps {
  type: "link" | "files";
  value: string | any;
}

export default function AttachmentCard({ type, value }: AttachmentCardProps) {
  console.log(value);
  return (
    <div className="flex items-center justify-between p-2 bg-gray-800 rounded-lg border b-1 border-white mb-4">
      <div className="flex items-center">
        <div className="p-2 bg-gray-500 mr-4 rounded flex justify-center">
          {type == "link" ? (
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-outlined/48/FFFFFF/link--v1.png"
              alt="link--v1"
            />
          ) : (
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/48/FFFFFF/upload--v1.png"
              alt="upload--v1"
            />
          )}
        </div>
        <div>
          {type == "link" ? (
            <a
              href={`https://${value}`}
              className="text-blue-500"
              target="_blank"
            >
              {value}
            </a>
          ) : (
            <>
              <p className="text-white">{value.name}</p>
              <p className="text-gray-400">{value.size / 1000} MB</p>
            </>
          )}
        </div>
      </div>

      <button className="text-white">
        {/* Icon placeholder - replace with your icon */}
        ...
      </button>
    </div>
  );
}
