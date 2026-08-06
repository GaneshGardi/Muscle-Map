import React from "react";
import { View } from "react-native";

import WorkoutNode from "../Node/WorkoutNode";

import styles from "./WeekSection.styles";

import type { WeekData } from "@/components/Home/Data/journeyData";

interface WeekSectionProps {
  week: WeekData;
  positionOffset?: number;
  onWorkoutPress?: (workoutId: string) => void;
}

export default function WeekSection({
  week,
  positionOffset = 0,
  onWorkoutPress,
}: WeekSectionProps) {
  const reversedWorkouts = [...week.workouts].reverse();

  return (
    <View style={styles.container}>
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