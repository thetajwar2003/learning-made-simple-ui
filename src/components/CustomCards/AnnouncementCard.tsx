import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import UserHero from "../CustomHero/UserHero";
import UploadFiles from "../Modals/UploadFiles";
import AddLink from "../Modals/AddLink";
import AttachmentCard from "./AttachmentCard";

import { v4 as uuid } from "uuid";

import { Amplify, Storage, API } from "aws-amplify";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

interface CreateAnnouncementCardProps {
  classCode: string;
  itemType?: string;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateAnnouncementCard({
  classCode,
  itemType = "posts",
  isOpen,
  setIsOpen,
}: CreateAnnouncementCardProps) {
  const [createAnnouncement, setCreateAnnouncement] = useState(isOpen || false);
  const [openFilesModal, setOpenFilesModal] = useState(false);
  const [openLinkModal, setOpenLinkModal] = useState(false);
  const [link, setLink] = useState("");
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState(""); // New state for title
  const [description, setDescription] = useState(""); // New state for description
  const [dueDate, setDueDate] = useState(""); // New state for due date
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
    setIsOpen && setIsOpen(!createAnnouncement); // close the entire announcement modal
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
    // TODO: might be unnecessary could look into
    setFiles(getValues("file")!);
    handleOpenFilesModal();
  };

  const onSubmit: SubmitHandler<CreatePostFormValues> = async (data) => {
    const currentTime = Date.now();
    const originalPoster = "prof.johnson";

    // make an array of promises that will be called later
    // TODO: edit this, exctract to a different function so we can make a post with no files/links
    const uploadS3Promises = [...getValues("file")].map((fileData: any) => {
      return Storage.put(
        `${itemType}/${originalPoster}${currentTime}_${fileData.name}`,
        fileData,
        {
          contentType: fileData.type,
        }
      );
    });

    try {
      // upload the files to S3 first
      const res = await Promise.all(uploadS3Promises);

      // create an array of promises that gets the private s3url of each uploaded file
      const s3FileNames = res.map((uploadResult) => {
        return uploadResult.key;
      });

      // create a request with all the params
      const postsReq: any = {
        originalPoster: "prof.johnson",
        timestamp: Date.now(),
        id: uuid(),
        classCode,
        ...data,
        file: s3FileNames,
      };

      const assignmentsReq = {
        ...postsReq,
        title,
        description,
        dueDate,
      };

      try {
        // call our api to post on postsTable
        const { success, data } = await API.post("apilms", `/${itemType}`, {
          body: itemType == "posts" ? postsReq : assignmentsReq,
        });
        console.log(success, data);
      } catch (error) {
        console.log("Error creating post: ", error);
      }
    } catch (error) {
      console.log("Error uploading files to S3: ", error);
    }

    // TODO: backend logic here -> post to db

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
          {itemType === "assignments" && (
            <>
              <input
                type="text"
                placeholder="Title of Assignment"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-gray-700 text-white p-4 mb-4 outline-none rounded-md"
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-gray-700 text-white p-4 mb-4 outline-none rounded-md"
                rows={3}
              />
              <input
                type="date"
                placeholder="Due Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full bg-gray-700 text-white p-4 mb-4 outline-none rounded-md"
              />
            </>
          )}

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
                {itemType === "assignments"
                  ? "Create an assignment"
                  : "Announce something to your class"}
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
