import React from "react";
import {
  StyleSheet,
  ViewStyle,
} from "react-native";

import Colors from "@/theme/Colors";
import { Radius } from "@/theme/Radius";
import { Shadows } from "@/theme/Shadows";
import AnimatedPressable from "../AnimatedPressable/AnimatedPressable";

interface Props {
  children: React.ReactNode;

  selected?: boolean;

  onPress?: () => void;

  style?: ViewStyle;
}

export default function AppCard({
  children,
  selected = false,
  onPress,
  style,
}: Props) {
  return (
    <AnimatedPressable
      onPress={onPress}
      style={[
        styles.card,

        selected && styles.selected,

        style,
      ]}
    >
      {children}
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,

    borderRadius: Radius.xl,

    padding: 20,

    borderWidth: 1,

    borderColor: Colors.borderLight,

    ...Shadows.small,
  },

  selected: {
    borderColor: Colors.primary,

    borderWidth: 2,
  },
});