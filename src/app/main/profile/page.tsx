"use client";

import React, { useEffect, useState } from "react";
import MainLayout from "../layout";
import ProfileCard from "@/components/ProfileCard";
import { useRouter } from "next/navigation";
import Link from "next/link";
//import { ReactComponent as LogoutIcon } from '@/path/to/your/logout-icon.svg';

const ProfilePage: React.FC = () => {
  return (
    <div>
      <ProfileCard />
      <Link href="/auth/login" passHref>
        <button
          id="logout-button"
          className="btn btn-primary fixed bottom-20 right-0 mx-5 mb-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
          </svg>
          Logout
        </button>
      </Link>
    </div>
  );
};

export default ProfilePage;
