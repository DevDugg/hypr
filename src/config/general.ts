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
  appName: "HYPR",
  appDescription: "HYPR - Strategic, results-oriented brand partnerships",
  domainName: "createdbyhypr.com",
  colors: {
    theme: "dark",
    main: colors.PRIMARY,
  },
  creator: "@aidenHIKO",
};
