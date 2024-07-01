import { colors } from "@/config/colors";

const validateColors = () => {
  Object.values(colors).forEach((color) => {
    if (
      !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color) &&
      !/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/.test(color) &&
      !/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|0?\.\d+|1(\.0)?)\s*\)$/.test(color)
    ) {
      throw new Error(`Invalid color: ${color}`);
    }
  });
};

const validateConfig = () => {
  validateColors();
};

export default validateConfig;
