"use client";

import "../../styles/globals.css";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }

  const getCurrentPage = () => {
    let pathname = usePathname().replace("/detail/", "").replace("-", " ");
    pathname =
      pathname.slice(0, 1).toUpperCase() +
      usePathname().replace("/detail/", "").replace("-", " ").slice(1);

    //console.log(pathname);
    return pathname;
  };

  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{
        type: "tween",
        stiffness: 260,
        damping: 20,
      }}
      exit={{ y: "100vh" }}
      className="flex flex-col h-screen"
    >
      <div className="flex flex-col min-h-screen">
        <Header title={getCurrentPage()} />
        <main className="flex-1">{children}</main>
      </div>
    </motion.div>
  );
}
