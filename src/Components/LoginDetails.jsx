import React from "react";
import { FaInstagram, FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginDetails = () => {
  return (
    <>
      <p className="text-center text-xl font-bold">Login</p>
      <form className="mt-6">
        <div className="mt-1 text-sm">
          <label htmlFor="username" className="block text mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="w-full rounded-md border border-gray-700 p-3 focus:border-purple-400 outline-none text-gray-900"
          />
        </div>
        <div className="mt-4 text-sm">
          <label htmlFor="password" className="block  mb-1 text">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full rounded-md border border-gray-700 p-3 focus:border-purple-400 outline-none text-gray-900"
          />
          <div className="flex justify-end text-xs mt-2 text">
            <a href="#" className="hover:underline text">
              Forgot Password?
            </a>
          </div>
        </div>
        <button
          onClick={(e) => e.preventDefault()}
          className="w-full mt-6 bg-purple-500 p-3 text-gray-900 rounded-md font-semibold  transition submitButton" //submit button
        >
          <Link to="/verify">Sign in</Link>
        </button>
      </form>
      <div className="flex items-center pt-4">
        <div className="flex-grow border-t text"></div>
        <p className="px-3 text-sm text">Login with social accounts</p>
        <div className="flex-grow border-t text"></div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        <button aria-label="Log in with Google" className="p-3 bg-transparent">
          <FaGoogle className="icons" />
        </button>
        <button aria-label="Log in with Twitter" className="p-3 bg-transparent">
          <FaInstagram className="icons" />
        </button>
        <button
          aria-label="Log in with Facebook"
          className="p-3 bg-transparent"
        >
          <FaFacebookF className="icons" />
        </button>
      </div>
      <p className="text-center text-xs mt-6 text">
        Don&apos;t have an account?{" "}
        <a href="_" className="hover:underline text">
          Sign up
        </a>
      </p>
    </>
  );
};

export default LoginDetails;
