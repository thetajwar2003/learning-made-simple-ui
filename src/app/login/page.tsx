"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

type LoginInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const [signUpError, setSignUpError] = useState<string>("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();

  const signUp = async (data: LoginInputs) => {
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
  };

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
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
    <section className="text-gray-400 body-font absolute inset-0 bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-row text-center w-full mb-12 justify-around">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            Sign Into Learning Made Simple
          </h1>
        </div>
        <form className="lg:w-1/2 md:w-2/3 mx-auto justify-center">
          <div className="flex flex-col -m-2 items-center">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-400">Email</label>
                <input
                  type="text"
                  id="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter a valid email.",
                    },
                  })}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Please enter a password.",
                    },
                    minLength: {
                      value: 8,
                      message: "Please enter a stronger password.",
                    },
                  })}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
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
      </div>
    </section>
  );
}
