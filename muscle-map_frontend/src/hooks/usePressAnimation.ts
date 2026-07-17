import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Motion } from "@/theme/Motion";

import { feedback } from "@/utils/feedback";

export default function usePressAnimation() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: scale.value,
      },
    ],
  }));

  const pressIn = () => {
    feedback.selection();

    scale.value = withSpring(
      Motion.pressScale,
      Motion.spring
    );
  };

  const pressOut = () => {
    scale.value = withSpring(
      1,
      Motion.spring
    );
  };

  return {
    animatedStyle,
    pressIn,
    pressOut,
  };
}