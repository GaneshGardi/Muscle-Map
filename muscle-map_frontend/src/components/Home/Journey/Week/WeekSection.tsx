import React from "react";
import { Text, View } from "react-native";
import { Flag } from "lucide-react-native";

import { Colors } from "@/theme/AppTheme";

import WorkoutNode from "../Node/WorkoutNode";

import styles from "./WeekSection.styles"; 

import type { WeekData } from "@/components/Home/Data/journeyData";

interface WeekSectionProps {
  week: WeekData;
  isCurrent?: boolean;
  positionOffset?: number;
  onWorkoutPress?: (workoutId: string) => void;
}

export default function WeekSection({
  week,
  isCurrent = false,
  positionOffset = 0,
  onWorkoutPress,
}: WeekSectionProps) {
  // Render Day 1 at the bottom, progressing upward as the week continues.
  const reversedWorkouts = [...week.workouts].reverse();

  return (
    <View style={styles.container}>
      {/* Week header */}
      <View style={styles.header}>
        <View style={styles.eyebrowRow}>
          {isCurrent && (
            <Flag
              size={14}
              color={Colors.primary}
              strokeWidth={2.8}
              fill={Colors.primary}
              style={styles.flagIcon}
            />
          )}

          <Text
            style={[
              styles.eyebrow,
              isCurrent && styles.eyebrowCurrent,
            ]}
          >
            WEEK {week.weekNumber}
          </Text>
        </View>

        <Text
          style={[
            styles.title,
            isCurrent && styles.titleCurrent,
          ]}
        >
          {week.title}
        </Text>

        <Text style={styles.subtitle}>{week.subtitle}</Text>
      </View>

      {/* Workout path (bottom-to-top) */}
      <View style={styles.path}>
        {reversedWorkouts.map((workout, reversedIndex) => {
          const originalIndex =
            week.workouts.length - 1 - reversedIndex;

          return (
            <WorkoutNode
              key={workout.id}
              workout={workout}
              position={positionOffset + reversedIndex}
              isLast={reversedIndex === reversedWorkouts.length - 1}
              onPress={() => onWorkoutPress?.(workout.id)}
            />
          );
        })}
      </View>
    </View>
  );
}