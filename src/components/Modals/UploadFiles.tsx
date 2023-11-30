"use client";
import React, { Dispatch, SetStateAction } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface UploadFilesProps {
  setOpenFilesModal: Dispatch<SetStateAction<boolean>>;
  registerFiles: UseFormRegisterReturn<"file">;
  uploadFiles: () => void;
  reset: any;
}

export default function UploadFiles({
  setOpenFilesModal,
  registerFiles,
  uploadFiles,
  reset,
}: UploadFilesProps) {
  const handleModal = () => {
    setOpenFilesModal(false);
    reset({
      file: null,
    });
  };
  return (
    <div className="relative w-full m-3 shadow-lg rounded-lg border border-primary overflow-hidden bg-gray-700">
      <div className="absolute right-2 top-2">
        <button
          type="button"
          id="close-input-files"
          className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400"
          onClick={handleModal}
        >
          &times;
        </button>
      </div>
      <div className="p-4">
        <label className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
          Upload As Many Files
        </label>
        <input
          className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-white bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          type="file"
          id="upload-form"
          multiple
          {...registerFiles}
        />
      </div>
      <div className="flex justify-end p-1">
        <button
          type="button"
          id="close-input-files"
          className="text-white p-1 rounded-md bg-primary"
          onClick={uploadFiles}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
