import React from "react";
import { View, Text } from "react-native";

import styles from "./WeekHero.styles";

interface ProgressBarProps {
  progress: number;
  completed: number;
  total: number;
}

export default function ProgressBar({
  progress,
  completed,
  total,
}: ProgressBarProps) {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressRing}>
        <View style={styles.progressCenter}>
          <Text style={styles.progressPercentage}>
            {progress}%
          </Text>

          <Text style={styles.progressFraction}>
            {completed} / {total}
          </Text>

          <Text style={styles.progressLabel}>
            Workouts
          </Text>
        </View>
      </View>
    </View>
  );
}