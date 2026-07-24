import { Platform } from "react-native";

const Shadows = {
  none: {},

  xs: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.04,
      shadowRadius: 2,
      shadowOffset: {
        width: 0,
        height: 1,
      },
    },
    android: {
      elevation: 1,
    },
  }),

  sm: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 4,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    android: {
      elevation: 2,
    },
  }),

  md: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 8,
      shadowOffset: {
        width: 0,
        height: 4,
      },
    },
    android: {
      elevation: 4,
    },
  }),

  lg: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.12,
      shadowRadius: 16,
      shadowOffset: {
        width: 0,
        height: 8,
      },
    },
    android: {
      elevation: 8,
    },
  }),

  xl: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.16,
      shadowRadius: 24,
      shadowOffset: {
        width: 0,
        height: 12,
      },
    },
    android: {
      elevation: 12,
    },
  }),
};

export default Shadows;