"use client";

import React from "react";
import RootLayout from "./layout";
import Link from "next/link";

const LoginPage = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {/* Logo Placeholder */}
      <div className="mb-4"> {/* Logo will go here */} </div>
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <div className="mb-4">
          <label htmlFor="username" className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex items-center justify-between">
          {/* temporary link instead of submit method. this will come later with implementation of zod */}
          <Link href="/main/stacks" passHref>
            <button className="btn btn-primary ">Sign In</button>
          </Link>
        </div>
      </form>
      {/* Credits Text Placeholder */}
      <p className="mt-4 text-center text-sm">
        © 2024 Your App Name. All rights reserved.
      </p>
    </div>
  );
};

export default LoginPage;
