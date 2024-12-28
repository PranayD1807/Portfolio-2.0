"use client";

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { ToastContainer } from "react-toastify";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga";
import visitApi from "@/api/modules/visits.api";

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

async function logVisit() {
  let sessionId = localStorage.getItem("session_id");
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem("session_id", sessionId);
  }

  const deviceInfo = `Platform: ${navigator.platform}, User-Agent: ${navigator.userAgent}`;

  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const { ip } = await response.json();

    const { response: apiResponse, err } = await visitApi.logVisit({
      sessionId,
      ipAddress: ip,
      deviceInfo,
    });

    if (err) {
      console.log(err);
    } else {
      console.log("Visited");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (pathname) {
      ReactGA.pageview(pathname); // Track pageview on path change
    }
  }, [pathname]);

  useEffect(() => {
    if (!dataFetched) {
      logVisit();
      setDataFetched(true);
    }
  }, [dataFetched]);

  return (
    <html lang="en">
      <head>
        <title>Pranay Dhongade</title>
        <meta name="description" content="Software Engineer" />
        <meta
          name="google-site-verification"
          content="9KhOlc-JIzrgHKX8fmRXgx04CGw4xcHOZVRBT5VMVvY"
        />
      </head>
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
