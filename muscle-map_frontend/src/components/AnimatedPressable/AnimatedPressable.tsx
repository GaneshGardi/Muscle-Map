import React from "react";
import {
  Pressable,
  PressableProps,
} from "react-native";

import Animated from "react-native-reanimated";

import usePressAnimation from "@/hooks/usePressAnimation";

interface Props extends PressableProps {
  children: React.ReactNode;
}

export default function AnimatedPressable({
  children,
  onPressIn,
  onPressOut,
  style,
  ...rest
}: Props) {
  const {
    animatedStyle,
    pressIn,
    pressOut,
  } = usePressAnimation();

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        {...rest}
        style={style}
        onPressIn={(e) => {
          pressIn();
          onPressIn?.(e);
        }}
        onPressOut={(e) => {
          pressOut();
          onPressOut?.(e);
        }}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}