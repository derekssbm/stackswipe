"use client";
// src/app/main/stack-overview/page.tsx
import { useGlobalContext } from "@/context/globalContext";
import React, { useEffect, useState } from "react";

const StacksPage = () => {
  const { pageState, storePageState } = useGlobalContext();
  const [inputValue, setInputValue] = useState("");

  // Load state when the component mounts
  useEffect(() => {
    if (pageState.stacks) {
      setInputValue(pageState.stacks.inputValue);
    }
  }, [pageState.stacks]);

  // Update context state when input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    storePageState("stacks", { inputValue: newValue });
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {/* Other content */}
    </div>
  );
};

export default StacksPage;
