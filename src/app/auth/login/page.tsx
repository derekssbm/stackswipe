"use client";

import React from "react";
import RootLayout from "./layout";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-11"></div>
      <div className="mb-11"></div>
      <div className="mb-4">
        <Image
          src={"/data/big_logo.png"}
          alt={"big_logo"}
          width="300"
          height="300"
        ></Image>{" "}
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-xs mt-11">
        <div className="mb-6">
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-10">
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex items-center justify-between">
          <Link href="/main/stacks" passHref>
            <button className="btn btn-primary ">Sign In</button>
          </Link>
        </div>
      </form>
      <div className="mb-11"></div>
      <div className="mb-11"></div>
      <div className="mb-11"></div>
      <div className="mb-11"></div>
      <div className="mb-3"></div>
      <p className="mt-4 mb-12 text-center text-sm">
        © StackSwipe. All rights reserved.
      </p>
    </div>
  );
};

export default LoginPage;
