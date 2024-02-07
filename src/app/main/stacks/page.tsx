"use client";

import React, { useEffect, useState } from "react";
import Stack from "@/components/Stack";
import StackSkeleton from "@/components/StackSkeleton";

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

const StackPage = () => {
  const [stacks, setStacks] = useState<StackProps[]>([]); // Initial state as an empty array
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("/data/dummy_data.json")
        .then((response) => response.json())
        .then((data) => {
          const { stacks } = data;
          setStacks(stacks); // Set the stacks array directly
          setIsLoading(false);
          console.log(stacks);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }, 1500);
  }, []);

  return (
    <>
      <div>
        {isLoading
          ? Array(5)
              .fill(null)
              .map((_, index) => (
                <StackSkeleton key={index} stackid={0} name={""} cards={[]} />
              ))
          : stacks.map((stack) => (
              <Stack
                key={stack.stackid}
                stackid={stack.stackid}
                name={stack.name}
                cards={stack.cards}
              />
            ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-default btn-outline btn-sm w-60 mb-5">
          Add Stack
        </button>
      </div>
    </>
  );
};

export default StackPage;
