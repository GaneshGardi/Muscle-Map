import { Easing } from "react-native-reanimated";

export const Motion = {
  duration: {
    fast: 180,
    normal: 280,
    slow: 400,
  },

  spring: {
    damping: 18,
    stiffness: 180,
    mass: 0.9,
  },

  pressScale: 0.97,

  easing: Easing.out(Easing.cubic),
};