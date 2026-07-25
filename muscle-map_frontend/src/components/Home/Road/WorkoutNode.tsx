import React from "react";
import { Pressable, Text, View } from "react-native";

import {
  Check,
  Flame,
  Lock,
  Leaf,
} from "lucide-react-native";

import { Colors } from "@/theme/AppTheme";

import styles from "./WorkoutNode.styles";

export type WorkoutNodeState =
  | "completed"
  | "current"
  | "locked"
  | "rest";

interface WorkoutNodeProps {
  day: number;

  title: string;

  state: WorkoutNodeState;

  onPress?: () => void;
}

export default function WorkoutNode({
  day,
  title,
  state,
  onPress,
}: WorkoutNodeProps) {
  const isLocked = state === "locked";

  const renderIcon = () => {
    switch (state) {
      case "completed":
        return (
          <Check
            size={24}
            color={Colors.surface}
            strokeWidth={3}
          />
        );

      case "current":
        return (
          <Flame
            size={24}
            color={Colors.surface}
            strokeWidth={2.5}
          />
        );

      case "rest":
        return (
          <Leaf
            size={24}
            color={Colors.surface}
            strokeWidth={2.5}
          />
        );

      default:
        return (
          <Lock
            size={22}
            color={Colors.textSecondary}
            strokeWidth={2.3}
          />
        );
    }
  };

  return (
    <Pressable
      disabled={isLocked}
      onPress={onPress}
      style={styles.container}
    >
      <View
        style={[
          styles.circle,

          state === "completed" &&
            styles.completed,

          state === "current" &&
            styles.current,

          state === "locked" &&
            styles.locked,

          state === "rest" &&
            styles.rest,
        ]}
      >
        {renderIcon()}
      </View>

      <Text
        style={[
          styles.title,

          isLocked &&
            styles.lockedText,
        ]}
      >
        {title}
      </Text>

    </Pressable>
  );
}