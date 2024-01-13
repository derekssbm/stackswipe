// src/components/Header.tsx
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-center">
        <h1 className="text-xl font-semibold">Page Title</h1>
      </div>
    </header>
  );
};

export default Header;
