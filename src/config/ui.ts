type ContainerType = {
  maxWidth?: string;
  desktopPadding: string;
  tabletPadding: string;
  mobilePadding: string;
  overflowHidden: boolean;
};

export type UIType = {
  container: ContainerType;
};

export const ui: UIType = {
  container: {
    desktopPadding: 60 + "px",
    tabletPadding: 32 + "px",
    mobilePadding: 16 + "px",
    overflowHidden: true,
  },
};
