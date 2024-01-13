//"use client";

// src/components/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 z-50 bg-white shadow-md">
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
