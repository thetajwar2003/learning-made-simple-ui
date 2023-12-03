import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

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
  fileUrls?: string[];
  onUpload?: (files: FileList) => void;
  completed: {
    name: string;
    profilePicUrl: string;
    date: string;
    fileUrls: string[];
  }[];
}

export default function SubmittedCard({
  id,
  title,
  description,
  dueDate,
  postedDate,
  teacher,
  fileUrls = [],
  completed,
  onUpload,
}: AssignmentCardProps) {
  const [isHoveredUpload, setIsHoveredUpload] = useState(false);
  const notifySuccess = () => toast.success('Homework submitted successfully!');
  const notifyError = () => toast.error('Homework submission failed!');

  return (
    <div className='p-2 w-full' key={id}>
      <Toaster />
      <div className='w-full p-4 rounded-lg border-2 border-secondary flex flex-col relative overflow-hidden'>
        <div className='flex items-center justify-between'>
          <div className='flex-grow'>
            <h2 className='text-white title-font text-[1.5rem]'>{title}</h2>
            <h3 className='text-gray-400 text-s'>Due Date: {dueDate}</h3>
            <p className='text-gray-500'>{description}</p>
            {fileUrls.map((url, index) => (
              <a
                key={index}
                href={url}
                className='text-blue-500 hover:underline'
              >
                Download File {index + 1}
                <br />
              </a>
            ))}
          </div>
        </div>
        <div className='mt-3'>
          <label className='text-gray-400'>Completed Students:</label>
          <table className='table-auto w-full mt-1'>
            <thead>
              <tr className=''>
                <th className='text-left'>Student</th>
                <th className='text-left'>Date Submitted</th>
                <th className='text-left'>Homework Link</th>
              </tr>
            </thead>
            <tbody>
              {completed.map((student, index) => (
                <tr key={index} className='mt-2'>
                  <td className='flex items-center'>
                    <img
                      src={student.profilePicUrl}
                      alt={student.name}
                      className='w-8 h-8 rounded-full mr-2'
                    />
                    <span className='text-gray-300 font-semibold'>
                      {student.name}
                    </span>
                  </td>
                  <td className='text-gray-300 text-sm'>{student.date}</td>
                  <td>
                    <a
                      href={student.fileUrls[0]}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-500 hover:underline'
                    >
                      Homework Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
