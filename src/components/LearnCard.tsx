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

interface FrontProps {
  question: string;
}

interface BackProps {
  answer: string;
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
const CardFront = ({ question }: FrontProps) => (
  <div className="card bg-slate-700 shadow-2xl p-0 mx-10 my-11">
    <div
      className="card-body py-2 px-4"
      style={{ overflowY: "auto", maxHeight: "500px" }}
    >
      <h2 className="card-title">Question</h2>
      <div className="divider m-0"></div>
      <div
        className="mb-4"
        style={{ overflowY: "auto", maxHeight: "400px", minHeight: "400px" }}
      >
        <p>{question}</p>
      </div>
    </div>
  </div>
);

// Back of the Card Component
const CardBack = ({ answer }: BackProps) => (
  <div className="card bg-slate-700 shadow-2xl p-0 mx-10 my-11">
    <div
      className="card-body py-2 px-4"
      style={{ overflowY: "auto", maxHeight: "500px" }}
    >
      <h2 className="card-title">Answer</h2>
      <div className="divider m-0"></div>
      <div
        className="mb-4"
        style={{ overflowY: "auto", maxHeight: "400px", minHeight: "400px" }}
      >
        <p>{answer}</p>
      </div>
    </div>
  </div>
);

const LearnCard = ({
  cardid,
  question,
  answer,
  difficulty,
  nextReviewDate,
  timesAnsweredCorrectly,
  isFlipped,
}: CardProps) => {
  return (
    <div className="flex justify-center">
      <motion.div
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
          width: "420px",
          height: "560px",
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
            <CardFront question={question} />
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
            <CardBack answer={answer} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LearnCard;
