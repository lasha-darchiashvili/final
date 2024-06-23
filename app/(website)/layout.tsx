// import { Inter } from "next/font/google";
import "../globals.css";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col justify-between font-nunito">
     
     <Header/>
      {children}
     <Footer/>
    </div>
  );
}
