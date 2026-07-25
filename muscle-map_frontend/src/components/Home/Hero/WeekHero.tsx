import React from "react";
import { View, Text } from "react-native";

import HeroButton from "./HeroButton";
import ProgressBar from "./ProgressBar";

import styles from "./WeekHero.styles";

import HeroBackground from "./HeroBackground";

interface WeekHeroProps {
  week: number;
  workoutName: string;
  muscleGroups: string;
  progress: number;
  completed: number;
  total: number;
  onStartWorkout?: () => void;
}

export default function WeekHero({
  week,
  workoutName,
  muscleGroups,
  progress,
  completed,
  total,
  onStartWorkout,
}: WeekHeroProps) {
  return (
    <View style={styles.container}>
        <HeroBackground />
      <View style={styles.contentRow}>
        {/* LEFT COLUMN */}
        <View style={styles.leftColumn}>
          <Text style={styles.week}>
            WEEK {week}
          </Text>

          <Text style={styles.title}>
            {workoutName}
          </Text>

          <Text style={styles.subtitle}>
            {muscleGroups}
          </Text>

          <HeroButton
            title="Start Workout"
            onPress={onStartWorkout}
          />
        </View>

        {/* RIGHT COLUMN */}
        <View style={styles.rightColumn}>
          <ProgressBar
            progress={progress}
            completed={completed}
            total={total}
          />
        </View>
      </View>
    </View>
  );
}