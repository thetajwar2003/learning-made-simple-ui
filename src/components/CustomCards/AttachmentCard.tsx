"use client";
import React, { useState, useEffect } from "react";
import { Storage, Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { extractFileName } from "../../../utils/extractFileName";
Amplify.configure(awsconfig);

interface AttachmentCardProps {
  type: "link" | "files" | "s3";
  value: string | any;
  s3FileName?: string;
}

export default function AttachmentCard({
  type,
  value,
  s3FileName,
}: AttachmentCardProps) {
  const [fileUrl, setFileUrl] = useState("");
  useEffect(() => {
    const fetchFileUrl = async () => {
      try {
        const url = await Storage.get(s3FileName!, { level: "public" });
        setFileUrl(url);
      } catch (error) {
        console.error("Error fetching file URL:", error);
      }
    };

    fetchFileUrl();
  }, [s3FileName]);
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
              {type == "files" ? (
                <>
                  <p className="text-white">{value.name}</p>
                  <p className="text-gray-400">{value.size / 1000} MB</p>
                </>
              ) : (
                <a href={fileUrl} className="text-blue-500" target="_blank">
                  {extractFileName(value)}
                </a>
              )}
            </>
          )}
        </div>
      </div>

      <button className="text-white">...</button>
    </div>
  );
}
