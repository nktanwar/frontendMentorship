import type { Metadata } from "next";
import "./globals.css";
import SidePanel from "@/components/Side";
import NavBar from "@/components/Nav";

import { DM_Sans, Montserrat } from 'next/font/google';

// Importing DM Sans
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
  variable: '--font-dmsans', 
});

// Importing Montserrat
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
  variable: '--font-montserrat', 
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${montserrat.variable}`}>
      <body
        className="bg-[#ffffff] m-0 p-0"
      >
        <NavBar />
        <div className="flex ">
          {/* The side panel occupies fixed width */}
          <SidePanel />

          {/* Main content area takes up the remaining space.
              Add padding if needed so content starts below the navbar */}
          <main className="flex-1 ml-[112px] p-0 ">
            {children}
          </main>
        </div>
        
      </body>
    </html>
  );
}
