import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import AppText from "../AppText/AppText";

import Colors from "@/theme/Colors";

export const ITEM_HEIGHT = 72;

interface Props {
  value: number | null;
  displayValue?: string,
  index: number;
  scrollY: SharedValue<number>;
}

export default function WheelItem({
  value,
  displayValue,
  index,
  scrollY,
}: Props) {

  // Spacer items
  if (value === null) {
    return <View style={{ height: ITEM_HEIGHT }} />;
  }

  const animatedStyle = useAnimatedStyle(() => {
    const position = index * ITEM_HEIGHT;

    const distance = Math.abs(
      scrollY.value - position
    );

    const scale = interpolate(
      distance,
      [0, ITEM_HEIGHT * 2],
      [1.15, 0.85],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      distance,
      [0, ITEM_HEIGHT * 3],
      [1, 0.15],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyle,
      ]}
    >
      <AppText
        variant="display"
        style={styles.number}
      >
        {displayValue ?? value}
      </AppText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },

  number: {
    fontSize: 48,
    lineHeight: 56,
    fontWeight: "700",
    color: Colors.text,
    textAlign: "center",
  },
});