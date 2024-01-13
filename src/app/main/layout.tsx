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
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
