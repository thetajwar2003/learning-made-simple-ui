import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import AttachmentCard from "./AttachmentCard";

interface AssignmentCardProps {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  postedDate: string;
  teacher: {
    name: string;
    profilePicUrl: string;
  };
  file?: string[];
  completed: {
    name: string;
    profilePicUrl: string;
    date: string;
    file: string[];
  }[];
}

export default function AssignmentCard({
  id,
  title,
  description,
  dueDate,
  postedDate,
  teacher,
  file = [],
  completed,
}: AssignmentCardProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isHoveredSubmit, setIsHoveredSubmit] = useState(false);
  const [isHoveredUpload, setIsHoveredUpload] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const notifySuccess = () => toast.success("Homework submitted successfully!");
  const notifyError = () => toast.error("Homework submission failed!");

  const handleNameChange = () => {
    if (fileInputRef.current?.files) {
      const uploadedFiles = fileInputRef.current.files;
      // Set the uploaded file name
      setUploadedFileName(uploadedFiles[0]?.name || null);
    }
  };

  const handleSubmit = () => {
    console.log(fileInputRef.current?.files);
    if (uploadedFileName) {
      // Check if a file is uploaded before submitting
      // onUpload(fileInputRef.current.files);
      notifySuccess();
    } else {
      console.log("No files uploaded.");
      notifyError();
    }
  };

  return (
    <div className="p-2 w-full" key={id}>
      <Toaster />
      <div className="w-full p-4 rounded-lg border-2 border-secondary flex flex-col relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex-grow">
            <h2 className="text-white title-font text-[1.5rem]">{title}</h2>
            <h3 className="text-gray-400 text-s">Due Date: {dueDate}</h3>
            <p className="text-gray-500 mb-5">{description}</p>
            {file.map((url, index) => (
              <AttachmentCard
                type="s3"
                value={url}
                s3FileName={url}
                key={index}
              />
            ))}
          </div>
          <div
            className={`text-center mt-4 rounded-lg p-2 m-2 bg-red-400 ${
              isHoveredUpload
                ? "bg-green-500 hover:bg-green-600"
                : "bg-green-700 hover:bg-green-800"
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleNameChange}
            />
            <label
              className={`leading-7 text-sm text-white cursor-pointer  rounded-md px-3 py-1 transition-colors duration-200 ease-in-out`}
              onMouseEnter={() => setIsHoveredSubmit(true)}
              onMouseLeave={() => setIsHoveredSubmit(false)}
            >
              {uploadedFileName ? uploadedFileName : "Upload Homework"}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleNameChange}
              />
            </label>
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={handleSubmit}
            onMouseEnter={() => setIsHoveredUpload(true)}
            onMouseLeave={() => setIsHoveredUpload(false)}
            className={`w-full ${
              isHoveredSubmit
                ? "bg-green-700 hover:bg-green-800"
                : "bg-green-500 hover:bg-green-600"
            } text-white rounded-lg px-3 py-1 transition-colors duration-200 ease-in-out`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
