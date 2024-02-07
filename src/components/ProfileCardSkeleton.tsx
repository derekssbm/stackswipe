import React from "react";

const ProfileCardSkeleton = () => {
  return (
    <div className="card bg-slate-700 shadow-xl">
      <div className="card-body">
        <div className="h-8 w-1/3 rounded-md mb-4 skeleton"></div>
        <div className="h-4 w-2/3 rounded-md mb-2 skeleton"></div>
        <div className="h-4 w-3/4 rounded-md mb-2 skeleton"></div>
        <div className="h-4 w-2/5 rounded-md mb-2 skeleton"></div>
      </div>
    </div>
  );
};

export default ProfileCardSkeleton;
