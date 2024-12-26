"use client";

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { ToastContainer } from "react-toastify";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga";

ReactGA.initialize("G-JCPL33DQGG");

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

// Removed metadata for now.
// export const metadata = {
//   title: "Pranay Dhongade",
//   description: "Portfolio - Pranay Dhongade",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      ReactGA.pageview(pathname); // Track pageview on path change
    }
  }, [pathname]);

  return (
    <html lang="en">
      <Head>
        <title>Pranay Dhongade</title>
        <meta name="description" content="Software Engineer" />
      </Head>
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <ToastContainer
          position="bottom-left"
          theme="dark"
          toastClassName="text-sm"
        />
        <footer className="h-16" />
      </body>
    </html>
  );
}
