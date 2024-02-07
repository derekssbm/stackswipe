"use client";

import "../../../styles/globals.css";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }

  const getCurrentPage = () => {
    let pathname = usePathname().replace("/auth/", "").replace("-", " ");
    pathname =
      pathname.slice(0, 1).toUpperCase() +
      usePathname().replace("/auth/", "").replace("-", " ").slice(1);

    //console.log(pathname);
    return pathname;
  };

  return (
    <div className="flex flex-col h-screen">
      <Header title={getCurrentPage()} />
      <main className="flex-1">{children}</main>
    </div>
  );
}
