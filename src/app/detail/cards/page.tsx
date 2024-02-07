"use client";

import CardInfo from "@/components/CardInfo";
import StackMenu from "@/components/StackMenu";
import StackSkeleton from "@/components/StackSkeleton";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface CardProps {
  cardid: number;
  question: string;
  answer: string;
  difficulty: string;
  nextReviewDate: string;
  timesAnsweredCorrectly: number;
}

const CardsPage = () => {
  const searchParams = useSearchParams();
  const stackid = searchParams.get("stack-id");
  const [cards, setCards] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true); // New state variable

  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/main/stacks`);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("/data/dummy_data.json")
        .then((response) => response.json())
        .then((data) => {
          const { stacks } = data;

          setCards(
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
    <div>
      {isLoading
        ? Array(5)
            .fill(null)
            .map((_, index) => (
              <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>
              // <StackSkeleton key={index} stackid={0} name={""} cards={[]} />
            ))
        : cards.map((card) => (
            <div className="flex justify-center m-8">
              <CardInfo
                cardid={card.cardid}
                question={card.question}
                answer={card.answer}
                difficulty={card.difficulty}
                nextReviewDate={card.nextReviewDate}
                timesAnsweredCorrectly={card.timesAnsweredCorrectly}
              />
            </div>
          ))}
      <div className="flex justify-center mb-9">
        <button
          className="btn btn-default btn-outline btn-sm w-60"
          onClick={handleButtonClick}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default CardsPage;
