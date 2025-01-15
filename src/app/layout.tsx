import "./globals.css";

import { Viewport } from "next";
import { colors } from "@/config/colors";
import { general } from "@/config/general";
import { getSEOTags } from "@/lib/seo";
import { getSiteSettingsData } from "@/sanity/schemas/site-settings";
import { monument } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";

// import Script from "next/script";

// import Loader from "@/components/sections/loader";

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: colors["BACKGROUND"],
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata() {
  const seo = await getSiteSettingsData();
  if (!seo) return getSEOTags();

  const metadata = getSEOTags({
    title: seo?.seo?.title || general.appName,
    description: seo?.seo?.description || general.appDescription,
    keywords: seo?.seo?.keywords || [general.appName],

    icons: {
      icon: seo?.metadata?.icon ? [{ rel: "icon", url: urlFor(seo.metadata.icon).url() }] : [],
      apple: seo?.metadata?.apple_icon ? [{ rel: "apple-touch-icon", url: urlFor(seo.metadata.apple_icon).url() }] : [],
    },

    openGraph: {
      title: seo?.seo?.openGraph?.title || general.appName,
      description: seo?.seo?.openGraph?.description || general.appDescription,
      url: `https://${seo?.metadata?.metadataBase || general.domainName}`,
      siteName: seo?.seo?.openGraph?.title || general.appName,
      images: seo?.seo?.openGraph?.image
        ? [{ url: urlFor(seo.seo.openGraph.image).url(), width: 1200, height: 630 }]
        : [],
      locale: "en_US",
      type: "website",
    },

    // canonicalUrlRelative: seo?.seo?.canonicalUrlRelative || "/",

    applicationName: seo?.metadata?.applicationName || general.appName,

    // metadataBase: new URL(`https://${seo?.metadata?.metadataBase || general.domainName}`),

    extraTags: [
      ...(seo?.seo?.extraTags || []),
      {
        name: "google-site-verification",
        content: "lWI_8Aa3i4keiDK1bEIEDFIdc-e3f4lqCE1FdkgZaiU",
      },
    ],

    twitter: {
      title: seo?.seo?.openGraph?.title || general.appName,
      description: seo?.seo?.openGraph?.description || general.appDescription,
      card: "summary_large_image",
      images: seo?.seo?.openGraph?.image
        ? [{ url: urlFor(seo.seo.openGraph.image).url(), width: 1200, height: 630 }]
        : [],
    },
  });

  return {
    ...metadata,
    metadataBase: new URL(`https://${seo?.metadata?.metadataBase || general.domainName}`),
    verification: {
      google: "lWI_8Aa3i4keiDK1bEIEDFIdc-e3f4lqCE1FdkgZaiU",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monument.className} bg-BACKGROUND w-screen h-screen overflow-x-hidden`}>{children}</body>
      {/* <Script
        defer
        data-website-id="670cda2cbcb7e9de563c18a9"
        data-domain="createdbyhypr.com"
        src="https://datafa.st/js/script.js"
      ></Script> */}
    </html>
  );
}
