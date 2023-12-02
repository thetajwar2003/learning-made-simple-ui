import React, { useState } from 'react';

interface LoginInputProps {
  label: string;
  type: string;
  id: string;
  params?: any;
}

export default function LoginInput({
  label,
  type,
  id,
  params,
}: LoginInputProps) {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFileName(file.name);
    }
  };

  const uploadButtonLabel = fileName || 'Upload File';

  return (
    <>
      <div className='p-2 w-1/2'>
        <div className='relative'>
          <label className='leading-7 text-sm text-gray-400'>{label}</label>
          {type === 'file' && (
            <>
              <div
                onClick={() => document.getElementById(id)?.click()}
                className='w-full bg-gray-700 hover:bg-gray-800 rounded border border-gray-700 cursor-pointer text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              >
                {uploadButtonLabel}
              </div>
              <input
                type='file'
                id={id}
                {...params}
                className='hidden'
                onChange={handleFileChange}
              />
            </>
          )}
          {type !== 'file' && (
            <input
              type={type}
              id={id}
              {...params}
              className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-secondary focus:bg-gray-900 focus:ring-2 focus:ring-primary text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          )}
        </div>
      </div>
    </>
  );
}
