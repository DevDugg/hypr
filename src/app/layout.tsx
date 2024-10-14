import "./globals.css";

import Script from "next/script";
import { Viewport } from "next";
import { colors } from "@/config/colors";
import { getSEOTags } from "@/lib/seo";
import { monument } from "@/lib/fonts";

// import Loader from "@/components/sections/loader";

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: colors["BACKGROUND"],
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monument.className} bg-BACKGROUND w-screen h-screen overflow-x-hidden`}>{children}</body>
      <Script
        defer
        data-website-id="670cda2cbcb7e9de563c18a9"
        data-domain="createdbyhypr.com"
        src="https://datafa.st/js/script.js"
      ></Script>
    </html>
  );
}
