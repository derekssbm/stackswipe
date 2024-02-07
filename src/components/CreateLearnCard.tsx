import { motion } from "framer-motion";
import React, { useState } from "react";

interface CardProps {
  cardid: number;
  question: string;
  answer: string;
  difficulty: string;
  nextReviewDate: string;
  timesAnsweredCorrectly: number;
  isFlipped: boolean;
}

interface Props {
  isFlipped: boolean;
}

// Spring animation parameters
const spring = {
  type: "spring",
  stiffness: 300,
  damping: 40,
};

// Front of the Card Component
const CardFront = () => (
  <div className="card bg-slate-700 shadow-xl p-0 mx-10 mt-8">
    <div
      className="card-body py-2 px-4"
      style={{ overflowY: "auto", maxHeight: "420px" }}
    >
      <h2 className="card-title">Question</h2>
      <div className="divider m-0"></div>
      <div
        className="flex mb-4"
        style={{ overflowY: "auto", maxHeight: "320px", minHeight: "320px" }}
      >
        <textarea
          className="textarea textarea-ghost textarea-lg w-full max-w-xs"
          placeholder="Enter your question.."
          style={{ resize: 'none' }}
        ></textarea>
      </div>
    </div>
  </div>
);

// Back of the Card Component
const CardBack = () => (
  <div className="card bg-slate-700 shadow-xl p-0 mx-10 mt-8">
    <div
      className="card-body py-2 px-4"
      style={{ overflowY: "auto", maxHeight: "420px" }}
    >
      <h2 className="card-title">Answer</h2>
      <div className="divider m-0"></div>
      <div
        className="flex mb-4"
        style={{ overflowY: "auto", maxHeight: "320px", minHeight: "320px" }}
      >
        <textarea
          className="textarea textarea-ghost textarea-lg w-full max-w-xs"
          placeholder="Enter your answer.."
          style={{ resize: 'none' }}
        ></textarea>
      </div>
    </div>
  </div>
);

const CreateLearnCard = ({
  cardid,
  question,
  answer,
  difficulty,
  nextReviewDate,
  timesAnsweredCorrectly,
  isFlipped,
}: CardProps) => {
  return (
    <motion.div
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        width: "420px",
        height: "500px",
      }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={spring}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          style={{
            backfaceVisibility: "hidden",
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: isFlipped ? -1 : 1, // Adjust z-index based on flip state
          }}
        >
          <CardFront />
        </motion.div>
        <motion.div
          style={{
            backfaceVisibility: "hidden",
            width: "100%",
            height: "100%",
            position: "absolute",
            rotateY: 180,
            zIndex: isFlipped ? 1 : -1, // Adjust z-index based on flip state
          }}
        >
          <CardBack />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CreateLearnCard;
