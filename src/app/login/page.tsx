import React from "react";

export default function Login() {
  return (
    <section className="text-gray-400 body-font absolute inset-0 bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-row text-center w-full mb-12 justify-around">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            Sign Into Learning Made Simple
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto justify-center">
          <div className="flex flex-col -m-2 items-center">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-400">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
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
                  name="password"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-auto space-y-4">
              <button className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded-full text-lg w-full justify-center items-center">
                <img
                  className="w-5 h-5"
                  src="https://img.icons8.com/material-outlined/24/FFFFFF/enter-2.png"
                  loading="lazy"
                  alt="log in logo"
                />
                Log In
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
