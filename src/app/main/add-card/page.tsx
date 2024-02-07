"use client";

import React, { useState } from "react";
import CreateLearnCard from "@/components/CreateLearnCard";
import { useRouter } from "next/navigation";

interface CardProps {
  cardid: number;
  question: string;
  answer: string;
  difficulty: string;
  nextReviewDate: string;
  timesAnsweredCorrectly: number;
}

const AddCardPage = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const [difficulty, setDifficulty] = useState("");
  const [stack, setStack] = useState("");

  const [isFlipped, setIsFlipped] = useState(false);

  const router = useRouter();
  // Force refresh the page

  const resetForm = () => {
    router.refresh();
    // Reset any additional states for other form fields as needed
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    //console.log(sessionCards);
  };

  return (
    <>
      <div className="mb-0 flex justify-center ">
        <select
          className="select select-bordered w-full max-w-xs mx-5 mt-4"
          defaultValue=""
        >
          <option value="" disabled>
            Difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs mx-5 mt-4"
          defaultValue=""
        >
          <option value="" disabled>
            Stack
          </option>
          <option value="stack0">Networking Fundamentals</option>
          <option value="stack1">AWS CloudFormation</option>
          <option value="stack2">Python</option>
          <option value="stack3">Java</option>
          <option value="stack4">JavaScript</option>
        </select>
      </div>

      <div className="flex justify-center">
        <CreateLearnCard
          cardid={0}
          question={""}
          answer={""}
          difficulty={""}
          nextReviewDate={""}
          timesAnsweredCorrectly={0}
          isFlipped={isFlipped}
        ></CreateLearnCard>
      </div>

      <div className="flex justify-center space-x-12 mb-10">
        <button
          className="btn btn-circle btn-outline btn-lg btn-primary"
          onClick={resetForm}
        >
          <i className="placeholder-icon">➕</i>
        </button>

        <button
          className="btn btn-circle btn-outline btn-lg btn-info"
          onClick={handleFlip}
        >
          <i className="placeholder-icon">🔍</i>
        </button>
        <button className="btn-lg" disabled={true}>
          <i className="placeholder-icon"></i>
        </button>
      </div>
    </>
  );
};

export default AddCardPage;
