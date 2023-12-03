"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { StudentLoginType } from "@/types/auth";

import { API, Amplify, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import LoginInput from "../CustomInputs/LoginInput";
import { v4 as uuidv4 } from "uuid";

Amplify.configure(awsconfig);

export default function StudentSignUp() {
  const [signUpError, setSignUpError] = useState<string>("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<StudentLoginType>();

  const signUp = async (data: StudentLoginType) => {
    const { email, password } = data;

    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      console.log("Signed up a user:", user);
    } catch (error) {
      throw error;
    }

    try {
      const { body, message } = await API.post("apilms", "/student", {
        body: { ...data, id: uuidv4(), type: "student" },
      });
      console.log(body, message);
    } catch (error) {
      throw error;
    }
  };

  const onSubmit: SubmitHandler<StudentLoginType> = async (data) => {
    console.log("here");
    try {
      console.log("trying");
      await signUp(data).then(() => router.push("/student"));
    } catch (error: any) {
      console.log("failllll");

      console.error(error);
      setSignUpError(error.message);
    }
  };
  return (
    <form className="lg:w-1/2 md:w-2/3 mx-auto justify-center">
      <div className="flex flex-col -m-2 items-center">
        <LoginInput
          label="Email"
          type="text"
          id="email"
          params={{
            ...register("email", {
              required: {
                value: true,
                message: "Please enter a valid email.",
              },
            }),
          }}
        />

        <LoginInput
          label="Password"
          type="password"
          id="password"
          params={{
            ...register("password", {
              required: {
                value: true,
                message: "Please enter a password.",
              },
              minLength: {
                value: 8,
                message: "Please enter a stronger password.",
              },
            }),
          }}
        />

        <LoginInput
          label="School"
          type="text"
          id="school"
          params={{
            ...register("school", {
              required: {
                value: true,
                message: "Please enter a valid school.",
              },
            }),
          }}
        />

        <LoginInput
          label="Major"
          type="text"
          id="major"
          params={{
            ...register("major", {
              required: {
                value: true,
                message: "Please enter a valid major.",
              },
            }),
          }}
        />

        <LoginInput
          label="Guardian Name"
          type="text"
          id="guardianName"
          params={{
            ...register("guardianName", {
              required: {
                value: true,
                message: "Please enter a valid guardianName.",
              },
            }),
          }}
        />

        <LoginInput
          label="Guardian Number"
          type="text"
          id="guardianNumber"
          params={{
            ...register("guardianNumber", {
              required: {
                value: true,
                message: "Please enter a valid guardianNumber.",
              },
            }),
          }}
        />

        <div className="p-2 w-auto space-y-4">
          <button
            id="loginButton"
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded-full text-lg w-full justify-center items-center"
          >
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/material-outlined/24/FFFFFF/enter-2.png"
              loading="lazy"
              alt="log in logo"
            />
            Sign Up
          </button>
        </div>
        {signUpError != "" ? (
          <p
            id="signUpError"
            className="text-red-700                                                                                                                                                                                   "
          >
            {signUpError}
          </p>
        ) : null}
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center"></div>
      </div>
    </form>
  );
}
