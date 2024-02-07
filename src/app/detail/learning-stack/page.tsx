"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import LearnCardSkeleton from "@/components/LearnCardSkeleton";
import CardSwiper from "@/components/CardSwiper";

interface CardProps {
  cardid: number;
  question: string;
  answer: string;
  difficulty: string;
  nextReviewDate: string;
  timesAnsweredCorrectly: number;
}

const LearningStackPage = () => {
  const searchParams = useSearchParams();
  const stackid = searchParams.get("stack-id");

  const [isLoading, setIsLoading] = useState(true);

  const [sessionCards, setSessionCards] = useState<CardProps[]>([]);

  const router = useRouter();

  const handleEndSessionClick = () => {
    router.push("/main/stacks");
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("/data/dummy_data.json")
        .then((response) => response.json())
        .then((data) => {
          const { stacks } = data;

          setSessionCards(
            stacks.find(
              (stack: { stackid: number }) => stack.stackid === Number(stackid)
            ).cards
          );
          setIsLoading(false); // Set isLoading to false after data is loaded
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }, 1500);
  }, []);

  return (
    <div className="learning-stack-container">
      {isLoading ? (
        // Render skeleton when data is being fetched
        <div
          className="learning-stack-container"
          style={{ overflowX: "hidden" }}
        >
          <LearnCardSkeleton/>

          <div className="flex justify-center">
            <button
              className="btn btn-default btn-outline btn-sm w-60"
              onClick={handleEndSessionClick}
            >
              End session
            </button>
          </div>
        </div>
      ) : (
        <div
          className="learning-stack-container"
          style={{ overflowX: "hidden" }}
        >
          <CardSwiper cards={sessionCards}></CardSwiper>

          <div className="flex justify-center">
            <button
              className="btn btn-default btn-outline btn-sm w-60"
              onClick={handleEndSessionClick}
            >
              End session
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningStackPage;
