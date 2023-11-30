import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import UserHero from "../CustomHero/UserHero";
import UploadFiles from "../Modals/UploadFiles";
import AddLink from "../Modals/AddLink";
import AttachmentCard from "./AttachmentCard";

export default function CreateAnnouncementCard() {
  const [createAnnouncement, setCreateAnnouncement] = useState(false);
  const [openFilesModal, setOpenFilesModal] = useState(false);
  const [openLinkModal, setOpenLinkModal] = useState(false);
  const [link, setLink] = useState("");
  const [files, setFiles] = useState([]);

  const { register, setError, reset, handleSubmit, getValues } =
    useForm<CreatePostFormValues>();

  const handleCreateAnnouncement = () => {
    setCreateAnnouncement(!createAnnouncement); // close the entire announcement modal
    createAnnouncement // close the link and files modal too and if there are any values, reset
      ? (() => {
          setOpenLinkModal(false);
          setOpenFilesModal(false);
          setLink("");
          setFiles([]);
          reset({
            body: "",
            file: null,
            link: "",
          });
        })()
      : null;
  };

  const handleOpenLinkModal = () => {
    setOpenLinkModal(!openLinkModal);
  };

  const handleOpenFilesModal = () => {
    setOpenFilesModal(!openFilesModal);
  };

  const handleAddedLink = () => {
    // TODO: might be unnecessary could look into later
    setLink(getValues("link")!);
    handleOpenLinkModal();
  };

  const handleUploadedFiles = () => {
    // TODO: might be unnecessary could look into later
    setFiles(getValues("file")!);
    handleOpenFilesModal();
  };

  const onSubmit: SubmitHandler<CreatePostFormValues> = (data) => {
    const postReq = {
      originalPoster: "",
      timestamp: new Date().toLocaleDateString(),
      ...data,
      file: [...files],
    };

    // TODO: backend logic here -> post to db
    console.log(postReq);

    reset({
      body: "",
      file: null,
      link: "",
    });
    handleCreateAnnouncement();
  };

  useEffect(() => {
    setError("body", {
      type: "required",
      message: "This is required",
    });
  }, [setError]);

  return (
    <>
      {createAnnouncement ? (
        <form
          className="bg-gray-800 p-6 rounded-lg"
          id="create-announcement-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <textarea
            className="w-full bg-gray-700 text-white p-4 mb-4 outline-none rounded-md border-b-2 border-primary"
            rows={4}
            placeholder="Announce something to your class"
            {...register("body", { required: true })}
            required
            id="announcement-body"
          />

          {/* after we click add a link or files, it should pop up here */}
          {link && <AttachmentCard type="link" value={link} />}
          {files.length > 0 && (
            <>
              {[...files].map((f, index) => (
                <AttachmentCard type="files" value={f} key={index} />
              ))}
            </>
          )}

          <div className="flex justify-between">
            <div>
              <button
                type="button"
                className="text-white p-2 rounded-md bg-gray-700 mr-2"
                id="link-button"
                onClick={handleOpenLinkModal}
              >
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-outlined/48/FFFFFF/link--v1.png"
                  alt="link--v1"
                />
              </button>
              <button
                type="button"
                className="text-white p-2 rounded-md bg-gray-700 mr-2"
                id="upload-button"
                onClick={handleOpenFilesModal}
              >
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-rounded/48/FFFFFF/upload--v1.png"
                  alt="upload--v1"
                />
              </button>
            </div>
            <div>
              {/* Cancel and Post buttons */}
              <button
                type="button"
                className="text-gray-400 p-1 rounded-md bg-gray-700 mr-2"
                onClick={handleCreateAnnouncement}
                id="cancel-button"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white p-1 rounded-md bg-primary"
                id="post-button"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      ) : (
        <button
          className="p-2 w-full justify-start text-left bg-gray-800 rounded-lg"
          type="submit"
          id="create-announcement-card"
          onClick={handleCreateAnnouncement}
        >
          <UserHero>
            <div className="flex-grow">
              <h2 className="text-white title-font text-sm">
                Announce something to your class
              </h2>
            </div>
          </UserHero>
        </button>
      )}

      <div className="inline-flex">
        {openLinkModal && (
          <AddLink
            setOpenLinkModal={setOpenLinkModal}
            registerLink={{ ...register("link", { required: true }) }}
            reset={reset}
            addLink={handleAddedLink}
          />
        )}
        {openFilesModal && (
          <UploadFiles
            setOpenFilesModal={setOpenFilesModal}
            registerFiles={{ ...register("file", { required: true }) }}
            reset={reset}
            uploadFiles={handleUploadedFiles}
          />
        )}
      </div>
    </>
  );
}
