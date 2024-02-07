// src/components/Header.tsx
import React from "react";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <header className="sticky  top-0 z-10 bg-dark-500 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-center">
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
