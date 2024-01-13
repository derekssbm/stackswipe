//"use client";

// src/components/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 z-10 bg-dark-500 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between">
        <Link href="/main/profile" passHref>
          <button className="footer-button">Profile</button>
        </Link>
        <Link href="/main/stacks" passHref>
          <button className="footer-button">Stacks</button>
        </Link>
        <Link href="/main/add-card" passHref>
          <button className="footer-button">Add Card</button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
