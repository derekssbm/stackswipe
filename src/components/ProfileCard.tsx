"use client";
// src/pages/profile.tsx or the appropriate path based on your project structure
import React, { useEffect, useState } from "react";
import ProfileCardSkeleton from "./ProfileCardSkeleton";

// Define a type for the user data
type UserProfile = {
  username: string;
  email: string;
  signUpDate: string;
  role: string;
};

const ProfileCard: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Mimic an API call delay
    setTimeout(() => {
      // Fetch the user data from the JSON file
      fetch("/data/dummy_data.json")
        .then((response) => response.json())
        .then((data) => {
          // Assuming the data structure matches your JSON
          const { username, email, signUpDate, role } = data;
          setProfile({ username, email, signUpDate, role });
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }, 1500); // Delay in milliseconds
  }, []);

  return (
    <div className="container mx-auto my-10 p-5">
      {profile ? (
        // Profile content
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl">{profile.username}</h2>
            <p className="text-lg">
              <strong>Email:</strong> {profile.email}
            </p>
            <p className="text-lg">
              <strong>Sign-Up Date:</strong> {profile.signUpDate}
            </p>
            <p className="text-lg">
              <strong>Role:</strong> {profile.role}
            </p>
          </div>
        </div>
      ) : (
        // DaisyUI Skeleton loader
        <ProfileCardSkeleton />
      )}
    </div>
  );
};

export default ProfileCard;
