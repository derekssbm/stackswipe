"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import LearnCard from "@/components/LearnCard";
import { useRouter, useSearchParams } from "next/navigation";
import LearnCardSkeleton from "@/components/LearnCardSkeleton";
import PlaceholderCard from "@/components/PlaceholderCard";
import CardSwiper from "@/components/CardSwiper";

interface CardProps {
  cardid: number;
  question: string;
  answer: string;
  difficulty: string;
  nextReviewDate: string;
  timesAnsweredCorrectly: number;
  isFlipped: boolean;
}

interface StackProps {
  stackid: number;
  name: string;
  cards: CardProps[];
}

const LearningStackPage = () => {
  const searchParams = useSearchParams();
  const stackid = searchParams.get("stack-id");
  const [isStackCompleted, setIsStackCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New state variable

  const [sessionCards, setSessionCards] = useState<CardProps[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const exitDirection = useRef("left");
  const [, forceUpdate] = useState({});

  const router = useRouter();

  const handleEndSessionClick = () => {
    router.push(`/main/stacks`);
  };

  console.log(1);

  useEffect(() => {
    setTimeout(() => {
      fetch("/data/dummy_data.json")
        .then((response) => response.json())
        .then((data) => {
          const { stacks } = data;

          const cards = stacks.find(
            (stack: { stackid: number }) => stack.stackid === Number(stackid)
          ).cards;

          // It's a good practice to type the fetched data as well
          setSessionCards(cards as CardProps[]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }, 1500);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    console.log(sessionCards);
  };

  const cardArray = [
    {
      cardid: 11,
      question: "What are the elements of an AWS CloudFormation template?",
      answer:
        "AWS CloudFormation templates are JSON or YAML formatted text files that are comprised of five essential elements: parameters, output values, data tables for lookup, resources and their configuration values, and a template format version number [6][70].",
      difficulty: "hard",
      nextReviewDate: "2023-12-28",
      timesAnsweredCorrectly: 4,
      userid: 1,
      isFlipped: false,
    },
    {
      cardid: 12,
      question:
        "Can I manage individual AWS resources that are part of an AWS CloudFormation stack?",
      answer:
        "Yes, you can manage individual AWS resources within a CloudFormation stack, but it is recommended to let CloudFormation handle changes for better management of rules, best practices, and compliance controls [6].",
      difficulty: "easy",
      nextReviewDate: "2023-04-27",
      timesAnsweredCorrectly: 5,
      userid: 1,
      isFlipped: false,
    },
    {
      cardid: 13,
      question:
        "What happens when one of the resources in a stack cannot be created successfully?",
      answer:
        "If a resource in a stack cannot be created, CloudFormation automatically rolls back and terminates all the resources that were created, reverting the stack to the last known stable configuration [6][71].",
      difficulty: "hard",
      nextReviewDate: "2023-04-08",
      timesAnsweredCorrectly: 11,
      userid: 1,
      isFlipped: false,
    },
    {
      cardid: 14,
      question: "What is the AWS CloudFormation Public Registry?",
      answer:
        "The CloudFormation Public Registry is a searchable and managed catalog of extensions that contains resource types and modules published by AWS Partner Network Partners and the developer community, allowing for easier discovery and use [6].",
      difficulty: "easy",
      nextReviewDate: "2023-02-04",
      timesAnsweredCorrectly: 7,
      userid: 1,
      isFlipped: false,
    },
    {
      cardid: 15,
      question: "Can I create stacks in a Virtual Private Cloud (VPC)?",
      answer:
        "Yes, AWS CloudFormation supports creating VPCs, subnets, gateways, route tables, network ACLs, and various other resources within a VPC [6].",
      difficulty: "hard",
      nextReviewDate: "2023-06-22",
      timesAnsweredCorrectly: 1,
      userid: 1,
      isFlipped: false,
    },
    {
      cardid: 16,
      question: "Can I update my stack after it has been created?",
      answer:
        "Yes, you can modify and update the resources in your existing stacks using CloudFormation in a controlled and predictable way [6].",
      difficulty: "medium",
      nextReviewDate: "2023-09-20",
      timesAnsweredCorrectly: 3,
      userid: 1,
      isFlipped: false,
    },
    {
      cardid: 17,
      question:
        "How do you upgrade or downgrade a system with near-zero downtime?",
      answer:
        "To upgrade or downgrade with near-zero downtime, use migration steps such as launching a new instance with the desired specifications, installing updates and applications, testing, and then deploying the new instance to replace the old one [9].",
      difficulty: "easy",
      nextReviewDate: "2024-02-17",
      timesAnsweredCorrectly: 9,
      userid: 1,
      isFlipped: false,
    },
    {
      cardid: 18,
      question: "What are the steps involved in a CloudFormation Solution?",
      answer:
        "Steps include creating or using an existing CloudFormation template, saving the code in an S3 bucket, and then using AWS CloudFormation to create a stack on your template [9].",
      difficulty: "hard",
      nextReviewDate: "2024-05-16",
      timesAnsweredCorrectly: 4,
      userid: 1,
      isFlipped: false,
    },
    {
      cardid: 19,
      question:
        "What is the relation between an Availability Zone and a Region?",
      answer:
        "AWS regions are separate geographical areas, while availability zones are isolated areas within those regions that can replicate themselves when required [9].",
      difficulty: "hard",
      nextReviewDate: "2025-03-30",
      timesAnsweredCorrectly: 10,
      userid: 1,
      isFlipped: false,
    },
    {
      cardid: 20,
      question:
        "What is Amazon S3 and how does it relate to AWS CloudFormation?",
      answer:
        "Amazon S3 is a storage service that can store and retrieve any amount of data from anywhere, and it can be used with AWS CloudFormation to host templates or manage data related to CloudFormation stacks [9][45].",
      difficulty: "hard",
      nextReviewDate: "2024-10-30",
      timesAnsweredCorrectly: 13,
      userid: 1,
      isFlipped: false,
    },
  ];

  return (
    <>
      <div className="learning-stack-container">
        <CardSwiper cards={cardArray}></CardSwiper>
      </div>
      <button onClick={() => console.log(sessionCards)}>Consolelog</button>
    </>
  );
};

export default LearningStackPage;
