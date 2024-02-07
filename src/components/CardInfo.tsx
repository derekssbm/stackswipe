// CardInfo.tsx
import React from "react";
import "daisyui";

// Import lucide-react for icons if needed
// import { IconName } from "lucide-react";

// Interface for the component props
interface CardProps {
  cardid: number;
  question: string;
  answer: string;
  difficulty: string;
  nextReviewDate: string;
  timesAnsweredCorrectly: number;
}

const CardInfo: React.FC<CardProps> = ({
  cardid,
  question,
  answer,
  difficulty,
  nextReviewDate,
  timesAnsweredCorrectly,
}) => {
  return (
    <div className="card w-96 bg-slate-700 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card ID: {cardid}</h2>
        <p>
          <strong>Question:</strong> {question}
        </p>
        <p>
          <strong>Answer:</strong> {answer}
        </p>
        <p>
          <strong>Difficulty:</strong> {difficulty}
        </p>
        <p>
          <strong>Next Review Date:</strong> {nextReviewDate}
        </p>
        <p>
          <strong>Times Answered Correctly:</strong> {timesAnsweredCorrectly}
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
