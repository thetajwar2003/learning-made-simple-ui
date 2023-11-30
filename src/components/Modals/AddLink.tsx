"use client";
import React, { Dispatch, SetStateAction } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface AddLinkProps {
  setOpenLinkModal: Dispatch<SetStateAction<boolean>>;
  registerLink: UseFormRegisterReturn<"link">;
  addLink: () => void;
  reset: any;
}

export default function AddLink({
  setOpenLinkModal,
  registerLink,
  addLink,
  reset,
}: AddLinkProps) {
  const handleModal = () => {
    setOpenLinkModal(false);
    reset({
      link: "",
    });
  };
  return (
    <div className="relative w-full m-3 shadow-lg rounded-lg border border-primary overflow-hidden p-2 bg-gray-700">
      <div className="absolute right-2 top-2">
        <button
          type="button"
          id="close-add-link"
          className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400"
          onClick={handleModal}
        >
          &times;
        </button>
      </div>
      <div className="p-2">
        <label className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
          Add A Link
        </label>
        <input
          className="rounded-xl w-full bg-transparent shadow-sm placeholder-slate-400 border border-white p-2"
          placeholder="Add link"
          id="add-link"
          {...registerLink}
        />
      </div>
      <div className="flex justify-end p-1">
        <button
          type="button"
          id="add-button"
          className="text-white p-1 rounded-md bg-primary"
          onClick={addLink}
        >
          Add
        </button>
      </div>
    </div>
  );
}
