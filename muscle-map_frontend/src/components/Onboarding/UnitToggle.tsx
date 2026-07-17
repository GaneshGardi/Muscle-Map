import React, { useState } from "react";
import { LayoutChangeEvent, Pressable, StyleSheet, View } from "react-native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import AppText from "../AppText/AppText";

import Colors from "@/theme/Colors";

interface Props {
  leftLabel: string;
  rightLabel: string;

  value: string;

  onChange: (value: string) => void;
}

export default function UnitToggle({
  leftLabel,
  rightLabel,
  value,
  onChange,
}: Props) {
  const [width, setWidth] = useState(0);

  const translateX = useSharedValue(0);

  const optionWidth = width / 2;

  const onLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
  };

  const moveIndicator = (left: boolean) => {
    translateX.value = withTiming(left ? 0 : optionWidth, {
      duration: 220,
    });
  };

  const handleLeft = () => {
    moveIndicator(true);

    if (value === "ft") onChange("cm");
    if (value === "lb") onChange("kg");
  };

  const handleRight = () => {
    moveIndicator(false);

    if (value === "cm") onChange("ft");
    if (value === "kg") onChange("lb");
  };

  React.useEffect(() => {
    if (width == 0) return;

    moveIndicator(value == "cm" || value == "kg");
  }, [width, value]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const leftSelected = value === "cm" || value === "kg";

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Animated.View
        style={[
          styles.indicator,
          {
            width: optionWidth - 6,
          },
          indicatorStyle,
        ]}
      />

      <Pressable style={styles.option} onPress={handleLeft}>
        <AppText
          variant="bodyMedium"
          color={leftSelected ? Colors.white : Colors.textSecondary}
        >
          {leftLabel}
        </AppText>
      </Pressable>

      <Pressable style={styles.option} onPress={handleRight}>
        <AppText
          variant="bodyMedium"
          color={!leftSelected ? Colors.white : Colors.textSecondary}
        >
          {rightLabel}
        </AppText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,

    backgroundColor: "#F3F3F3",

    borderRadius: 14,

    flexDirection: "row",

    overflow: "hidden",

    position: "relative",
  },

  indicator: {
    position: "absolute",

    left: 3,

    top: 3,

    bottom: 3,

    borderRadius: 12,

    backgroundColor: Colors.primary,
  },

  option: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    zIndex: 2,
  },
});
