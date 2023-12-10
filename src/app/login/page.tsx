"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Corrected import path
import { SubmitHandler, useForm } from "react-hook-form";
import { UserLoginType } from "@/types/auth";

import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import LoginInput from "@/components/CustomInputs/LoginInput";

Amplify.configure(awsconfig);

export default function Login() {
  const [tab, setTab] = useState("student");
  const [loginError, setLoginError] = useState<string>("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginType>(); // Adjusted type

  const signIn = async (data: UserLoginType) => {
    const { email, password } = data;

    try {
      const user = await Auth.signIn(email, password);
      console.log("Logged in user:", user);
      router.push(`/${tab}`); // Redirect after successful login
    } catch (error: any) {
      console.error(error);
      setLoginError(error.message);
    }
  };

  const onSubmit: SubmitHandler<UserLoginType> = (data) => signIn(data);

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
            Log in to continue
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
        <form
          className="lg:w-1/2 md:w-2/3 mx-auto justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col -m-2 items-center">
            {/* Email Input */}
            <LoginInput
              label="Email"
              type="text"
              id="email"
              params={{
                ...register("email", {
                  required: "Please enter your email.",
                }),
              }}
            />

            {/* Password Input */}
            <LoginInput
              label="Password"
              type="password"
              id="password"
              params={{
                ...register("password", {
                  required: "Please enter your password.",
                }),
              }}
            />

            <div className="p-2 w-auto space-y-4">
              <button
                id="loginButton"
                type="submit"
                className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded-full text-lg w-full justify-center items-center"
              >
                Log In
              </button>
            </div>

            {loginError !== "" && (
              <p id="loginError" className="text-red-700">
                {loginError}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
