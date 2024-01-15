"use client";

import React, { useEffect, useState } from "react";
import Stack from "@/components/Stack";

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

  useEffect(() => {
    setTimeout(() => {
      fetch("/data/dummy_data.json")
        .then((response) => response.json())
        .then((data) => {
          const { stacks } = data;
          setStacks(stacks); // Set the stacks array directly
          console.log(stacks);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }, 1500);
  }, []);

  return (
    <div>
      {stacks.map((stack) => (
        <Stack
          key={stack.stackid}
          stackid={stack.stackid}
          name={stack.name}
          cards={stack.cards}
        />
      ))}
    </div>
  );
};

export default StackPage;
