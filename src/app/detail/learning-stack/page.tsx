"use client";
// learning-stack/page.tsx
import LearnCard from "@/components/LearnCard";
import { motion } from "framer-motion";
import React from "react";

// Dummy data for the example. Replace with real data as needed.
const cardData = {
  cardid: 1,
  question:
    "Erkläre den Unterschied zwischen einer API (Application Programming Interface) und einer SDK (Software Development Kit) in Bezug auf die Entwicklung von Software. Welche Vorteile bieten diese beiden Ansätze, und wann würdest du wählen, eine API gegenüber einem SDK zu verwenden?",
  answer:
    "APIs are interfaces for code, while SDKs are sets of tools that include APIs and other utilities to create applications.",
  difficulty: "Medium",
  nextReviewDate: "2023-07-24",
  timesAnsweredCorrectly: 5,
};

const LearningStackPage = () => {
  return (
    <main className="flex-grow overflow-auto pt-12 pb-24">
      <LearnCard {...cardData} />
    </main>
  );
};

export default LearningStackPage;
