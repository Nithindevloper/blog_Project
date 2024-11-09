"use client";

import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import signUp from "@/assets/SignUp-img.jpg";

export default function Signin() {
  return (
    <div>
      <Navbar />
      <div className="flex h-[50vh]">
        <div className="flex items-center justify-center w-full bg-gray-100">
          <Image src={signUp} alt="Sign Up Image" width={300} height={300} />
        </div>
        <div className="flex items-center justify-center w-full bg-white p-6">
          <form className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="password"
                placeholder="Enter password"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
               Login
            </button>
            <p className="mt-4 text-sm">
              Already have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
