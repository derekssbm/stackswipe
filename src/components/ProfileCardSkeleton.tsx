import React from "react";

const ProfileCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="h-8 rounded-md mb-4 skeleton"></div>
        <div className="h-4 rounded-md mb-2 skeleton"></div>
        <div className="h-4 rounded-md mb-2 skeleton"></div>
        <div className="h-4 rounded-md mb-2 skeleton"></div>
      </div>
    </div>
  );
};

export default ProfileCardSkeleton;
