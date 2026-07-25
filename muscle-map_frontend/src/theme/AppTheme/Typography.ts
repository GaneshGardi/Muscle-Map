// src/theme/AppTheme/Typography.ts

import { TextStyle } from "react-native";

const Typography: Record<string, TextStyle> = {
  hero: {
    fontSize: 36,
    fontWeight: "700",
  },

  h1: {
    fontSize: 32,
    fontWeight: "700",
  },

  h2: {
    fontSize: 24,
    fontWeight: "700",
  },

  h3: {
    fontSize: 20,
    fontWeight: "600",
  },

  body: {
    fontSize: 16,
    fontWeight: "400",
  },

  bodyBold: {
    fontSize: 16,
    fontWeight: "600",
  },

  caption: {
    fontSize: 13,
    fontWeight: "400",
  },

  small: {
    fontSize: 12,
    fontWeight: "500",
  },
};

export default Typography;