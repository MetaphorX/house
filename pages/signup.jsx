import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaGoogle, FaFacebook, FaUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useSession, signIn, signOut } from "next-auth/react";

const signup = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 sm:mt-5">
      <div className="bg-gray-100 rounded-2xl shadow-2xl flex w-full max-w-4xl">
        <div className="w-full md:w-3/5 p-5">
          <div className="text-left font-bold">
            Emex-<span className="text-red-500">Crib</span>
          </div>
          <div className="py-6">
            <h2 className="text-3xl font-bold text-red-500 mb-2 text-center border-b-2 border-red-500 pb-4">
              Sign in
            </h2>
          </div>
          <div className="flex justify-center my-2">
            <a
              href="/agents"
              className="border-2 border-gray-200 rounded-full p-3 mx-1"
              onClick={()=>signIn()}
              
            >
              <FaGoogle className="text-sm text-red-500" />
            </a>
            <a
              href="#"
              className="border-2 border-gray-200 rounded-full p-3 mx-1"
            >
              <FaFacebook className="text-sm text-red-500" />
            </a>
            <a
              href="#"
              className="border-2 border-gray-200 rounded-full p-3 mx-1"
            >
              <AiOutlineTwitter className="text-sm text-red-500" />
            </a>
            <a
              href="#"
              className="border-2 border-gray-200 rounded-full p-3 mx-1"
            >
              <FaLinkedinIn className="text-sm text-red-500" />
            </a>
          </div>
          <p className="text-gray-500 text-sm my-3 text-center">
            Login in with Username and Password
          </p>
          <div className="flex flex-col items-center">
            <div className="bg-white w-64 p-2 flex items-center">
              <FaUser className="text-gray-300 m-2" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="outline-none flex-1"
              />
            </div>

            <div className="bg-white w-64 p-2 flex items-center mt-3">
              <MdLockOutline className="text-gray-300 m-2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="outline-none flex-1"
              />
            </div>
            <div className="flex justify-between w-64 mb-5">
              <label className="flex items-center text-xs ">
                <input type="checkbox" name="remember" className="mr-1" />
                Remember Me
              </label>
              <a href="" className="text-xs">
                {" "}
                Forgot Password?
              </a>
            </div>
            <a
              href="#"
              className="border-2 border-white bg-red-500 text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-500 hover:border-red-500"
            >
              Sign In
            </a>
          </div>
        </div>
        <div className="sign w-2/5 bg-red-500 text-white text-center rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-2xl font-bold mb-2 border-b-2 pb-4">
            New Agent!!
          </h2>
          <p className="mb-10">
            Be a <span className="font-bold text-xs">Rent-Crib</span> agent
          </p>
          <a
            href="#"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-500"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default signup;
