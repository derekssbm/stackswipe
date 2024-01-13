"use client";
import Header from "@/components/Header";
import "../../styles/globals.css";
import Footer from "@/components/Footer";
//import { GlobalProvider } from "@/context/globalContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
