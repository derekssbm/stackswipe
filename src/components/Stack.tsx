"use client";

import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import StackMenu from "./StackMenu";
import RenameDialog from "./RenameDialog";

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

const Stack = ({ stackid, name, cards }: StackProps) => {
  // Inside your Stack component
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false); // State for rename dialog visibility

  const handleAllCardsClick = () => {
    router.push(`/detail/learning-stack?stack-id=${stackid}`);
  };

  const openRenameDialog = () => {
    setIsMenuOpen(false); // Close menu when opening rename dialog
    setIsRenameDialogOpen(true);
  };

  // Helper function to check if the card needs to be learned
  const needsToBeLearned = (nextReviewDate: string) => {
    const today = new Date();
    const reviewDate = new Date(nextReviewDate);
    return reviewDate <= today;
  };

  // Calculate the progress percentage
  const totalCards = cards.length;
  const cardsToLearn = cards.filter((card) =>
    needsToBeLearned(card.nextReviewDate)
  ).length;
  const progressPercentage = Math.round(
    ((totalCards - cardsToLearn) / totalCards) * 100
  );

  return (
    <div className="card bg-slate-700 shadow-xl p-0 mx-8 my-6">
      <div className="card-body py-2 px-4">
        <div className="card-actions justify-end absolute right-1 top-0">
          <button
            className="btn btn-ghost btn-circle btn-sm"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5" // Increased size
              viewBox="0 0 24 24" // Adjusted for the new size
              fill="currentColor"
            >
              <path d="M5 12a2 2 0 110-4 2 2 0 011 3.732V12H5zm7 0a2 2 0 110-4 2 2 0 011 3.732V12h-1zm7 0a2 2 0 110-4 2 2 0 011 3.732V12h-1z" />
            </svg>
          </button>
          {isMenuOpen && (
            <div
              className="absolute right-0"
              style={{
                top: menuButtonRef.current?.offsetTop,
                right: menuButtonRef.current?.offsetWidth,
              }}
            >
              <StackMenu
                onClose={() => setIsMenuOpen(false)}
                onRename={openRenameDialog}
                stackid={stackid}
              />
            </div>
          )}
        </div>
        <h2 className="card-title text-white mb-0">{name}</h2>
        <p className="text-white text-sm mb-0">{totalCards} Cards</p>
        <p className="text-white text-sm mb-0">
          {cardsToLearn} open for review
        </p>
        <div className="flex items-center mb-2">
          <progress
            className="progress progress-primary flex-10 mr-2"
            value={progressPercentage}
            max="100"
          ></progress>
          <p className="text-white">{progressPercentage}%</p>
        </div>
        <div className="card-actions justify-between mb-2">
          <button
            className="btn btn-primary btn-sm"
            onClick={handleAllCardsClick}
          >
            All cards
          </button>
          <button className="btn btn-secondary btn-sm">Open cards</button>
        </div>
      </div>
      <RenameDialog
        isOpen={isRenameDialogOpen}
        onClose={() => setIsRenameDialogOpen(false)}
      />
    </div>
  );
};

export default Stack;
