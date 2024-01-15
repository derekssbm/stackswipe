"use client";

import React from "react";
import MainLayout from "../layout";
import LearnCard from "@/components/LearnCard";

const LoginPage = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <LearnCard
      cardid={0}
      question={""}
      answer={""}
      difficulty={""}
      nextReviewDate={""}
      timesAnsweredCorrectly={0}
    ></LearnCard>
  );
};

export default LoginPage;
