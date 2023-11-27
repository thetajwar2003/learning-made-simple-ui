"use client";
import StudentSignUp from "@/components/SignUp/Student";
import TeacherSignUp from "@/components/SignUp/Teacher";
import React, { useState } from "react";

export default function Login() {
  const [tab, setTab] = useState("student");

  const handleTab = () => {
    setTab(tab == "student" ? "teacher" : "student");
  };

  return (
    <section className="text-gray-400 body-font absolute inset-0 bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-4xl font-bold title-font text-white mb-3">
            Sign Into Learning Made Simple
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Select either Student or Teacher
          </p>
          <div className="flex mx-auto border-2 border-primary rounded overflow-hidden mt-6">
            <button
              className={`py-1 px-4 focus:outline-none ${
                tab == "student" ? `bg-primary text-white` : `text-gray-300 `
              }`}
              onClick={handleTab}
              id="login-student-tab"
            >
              Student
            </button>
            <button
              className={`py-1 px-4 focus:outline-none ${
                tab == "teacher" ? `bg-primary text-white` : `text-gray-300 `
              }`}
              onClick={handleTab}
              id="login-teacher-tab"
            >
              Teacher
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -m-10">
          {tab == "student" ? <StudentSignUp /> : <TeacherSignUp />}
        </div>
      </div>
    </section>
  );
}
