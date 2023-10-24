import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        alt="s"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/1a5c57fd-7621-42e4-8488-e5ae84fe9ae5/VN-vi-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "> </div>
      <div className="fixed w-full px-4 py-24  z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form className="w-full flex flex-col py-4">
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="p-3 my-2 bg-gray-700 rounded"
              ></input>
              <input
                type="password"
                placeholder="password"
                autoComplete="password"
                className="p-3 my-2 bg-gray-700 rounded"
              ></input>
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input
                    className="mr-2"
                    type="checkbox"
                  ></input>
                  remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-4">
                <span className="text-gray-400 text-sm">
                  Already subscribed to NPQFLIX?
                </span>
                <Link to={"/signin"}> Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
