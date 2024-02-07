"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface CardProps {
  cardid: number;
  question: string;
  answer: string;
  difficulty: string;
  nextReviewDate: string;
  timesAnsweredCorrectly: number;
}

interface StackProps {
  stackid: number;
  name: string;
  cards: CardProps[];
}

const StackSkeleton = ({ stackid, name, cards }: StackProps) => {
  return (
    <div className="card bg-slate-700 shadow-xl p-0 mx-8 my-6">
      <div className="card-body py-2 px-4">
        <div className="card-actions justify-end absolute right-1 top-0">
          <button className="btn btn-ghost btn-circle btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5" // Increased size
              viewBox="0 0 24 24" // Adjusted for the new size
              fill="currentColor"
            >
              <path d="M5 12a2 2 0 110-4 2 2 0 011 3.732V12H5zm7 0a2 2 0 110-4 2 2 0 011 3.732V12h-1zm7 0a2 2 0 110-4 2 2 0 011 3.732V12h-1z" />
            </svg>
          </button>
        </div>
        <div className="h-7 w-1/3 rounded-md mb-2 skeleton"></div>
        <div className="h-4 w-1/4 rounded-md mb-2 skeleton"></div>
        <div className="h-4 w-2/5 rounded-md mb-2 skeleton"></div>
        <div className="flex items-center mb-2">
          <progress className="progress  flex-10 mr-2" max="100"></progress>
        </div>
        <div className="card-actions justify-between mb-2">
          <button className="btn btn-primary btn-sm" disabled={true}>
            All cards
          </button>
          <button className="btn btn-secondary btn-sm" disabled={true}>
            Open cards
          </button>
        </div>
      </div>
    </div>
  );
};

export default StackSkeleton;
