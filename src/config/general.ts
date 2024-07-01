import { colors } from "./colors";

type GeneralType = {
  appName: string;
  appDescription: string;
  domainName: string;
  colors: {
    theme: "light" | "dark";
    main: string;
  };
  creator: `@${string}`;
};

export const general: GeneralType = {
  appName: "Next Landing Template",
  appDescription: "Next Landing Template",
  domainName: "avium.trade",
  colors: {
    theme: "light",
    main: colors.PRIMARY,
  },
  creator: "@website_dugg",
};
