"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AssignmentCard from "@/components/CustomCards/AssignmentCard";
import ClassCodeCard from "@/components/CustomCards/ClassCodeCard";
import SubmittedCard from "@/components/CustomCards/SubmittedCard";
import CreateAnnouncementCard from "@/components/CustomCards/AnnouncementCard";

import { extractRole } from "../../utils/extractFromString";

import { API, Amplify } from "aws-amplify";
import awsExports from "../aws-exports"; // The path to your aws-exports file
import Loading from "@/components/Loading";
Amplify.configure(awsExports);

interface course {
  classCode: string;
}

export default function Assignments({ classCode }: course) {
  const [isCreatingAssignment, setIsCreatingAssignment] = useState(false);
  const [assignments, setAssignments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pathname = usePathname();
  const role = extractRole(pathname);

  const itemType = "assignments"; // TODO: Get the user type from the database

  const handleCreateAssignment = () => {
    setIsCreatingAssignment(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await API.get("apilms", "/assignments", {}); //TODO change it be the specific class
        console.log(apiData);
        setAssignments(apiData);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        console.log("error fetching assignments...", err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching assignments</div>;
  }

  if (!assignments) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        <div className="flex flex-col">
          <ClassCodeCard code={classCode} />
        </div>
        {/* new assignment */}
        <div className="col-span-4 flex flex-col w-full">
          {role === "teacher" && (
            <div className="p-2 w-full">
              <div className="flex justify-end items-center">
                <button
                  onClick={handleCreateAssignment}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2 transition-colors duration-200 ease-in-out text-lg"
                >
                  Create New Assignment
                </button>
              </div>
            </div>
          )}

          {isCreatingAssignment && (
            <CreateAnnouncementCard
              classCode={classCode}
              itemType={itemType}
              isOpen={isCreatingAssignment}
              setIsOpen={setIsCreatingAssignment}
            />
          )}

          {/* student or teacher assignment card */}
          {loading ? (
            <Loading message="Getting assignments" />
          ) : (
            <>
              {assignments.map((item, index) =>
                role === "teacher" ? (
                  <SubmittedCard {...item} key={index} />
                ) : (
                  <AssignmentCard {...item} key={index} />
                )
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
