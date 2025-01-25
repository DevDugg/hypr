import localFont from "next/font/local";

// For custom fonts

export const monument = localFont({
  src: [
    {
      path: "../../public/fonts/monument-extended.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/monument-extended-black.otf",
      weight: "700",
    },
  ],
  display: "swap",
  preload: true,
});

export const grotesk = localFont({
  src: [
    {
      path: "../../public/fonts/OverusedGrotesk-Bold-BF64eeac1756b57.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/OverusedGrotesk-Medium-BF64eeac181a996.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/OverusedGrotesk-Roman-BF64eeac17dee17.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/OverusedGrotesk-SemiBold-BF64eeac17e1195.otf",
      weight: "600",
    },
  ],
  variable: "--font-grotesk",
  preload: true,
});
