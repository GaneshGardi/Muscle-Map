import React from "react";
import { Pressable, Text, View } from "react-native";
import { ChevronRight } from "lucide-react-native";

import { Colors } from "@/theme/AppTheme";

import styles from "./CurrentWorkoutCard.styles";

interface CurrentWorkoutCardProps {
  week?: number;
  day?: number;
  workoutName?: string;
  onPress?: () => void;
}

export default function CurrentWorkoutCard({
  week = 3,
  day = 2,
  workoutName = "Push Day",
  onPress,
}: CurrentWorkoutCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <View style={styles.textContent}>
        <Text style={styles.label}>
          WEEK {week} • DAY {day}
        </Text>

        <Text style={styles.title}>
          {workoutName}
        </Text>
      </View>

      <View style={styles.arrowContainer}>
        <ChevronRight
          size={22}
          color={Colors.surface}
          strokeWidth={2.8}
        />
      </View>
    </Pressable>
  );
}