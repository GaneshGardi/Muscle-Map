import React, {
  useCallback,
  useState,
} from "react";

import {
  LayoutChangeEvent,
  View,
} from "react-native";

import WorkoutNode from "../Node/WorkoutNode";
import WorkoutPath from "../WorkoutPath";

import styles from "./WeekSection.styles";

import type { WeekData } from "@/components/Home/Data/journeyData";

interface WeekSectionProps {
  week: WeekData;
  positionOffset?: number;
  onWorkoutPress?: (
    workoutId: string
  ) => void;
}

export default function WeekSection({
  week,
  positionOffset = 0,
  onWorkoutPress,
}: WeekSectionProps) {
  const reversedWorkouts = [
    ...week.workouts,
  ].reverse();

  const [
    nodeYPositions,
    setNodeYPositions,
  ] = useState<(number | null)[]>(() =>
    new Array(
      reversedWorkouts.length
    ).fill(null)
  );

  const [
    pathSize,
    setPathSize,
  ] = useState({
    width: 0,
    height: 0,
  });

  const handleNodeLayout = useCallback(
    (index: number) =>
      (event: LayoutChangeEvent) => {
        const { y } =
          event.nativeEvent.layout;

        setNodeYPositions((previous) => {
          if (previous[index] === y) {
            return previous;
          }

          const next = [
            ...previous,
          ];

          next[index] = y;

          return next;
        });
      },
    []
  );

  const handlePathLayout =
    useCallback(
      (event: LayoutChangeEvent) => {
        const {
          width,
          height,
        } = event.nativeEvent.layout;

        setPathSize({
          width,
          height,
        });
      },
      []
    );

  return (
    <View
      style={styles.container}
      onLayout={handlePathLayout}
    >
      <WorkoutPath
        nodeYPositions={
          nodeYPositions
        }
        positionOffset={
          positionOffset
        }
        containerWidth={
          pathSize.width
        }
        containerHeight={
          pathSize.height
        }
      />

      {reversedWorkouts.map(
        (workout, reversedIndex) => (
          <View
            key={workout.id}
            onLayout={handleNodeLayout(
              reversedIndex
            )}
          >
            <WorkoutNode
              workout={workout}
              position={
                positionOffset +
                reversedIndex
              }
              isLast={
                reversedIndex ===
                reversedWorkouts.length -
                  1
              }
              onPress={() =>
                onWorkoutPress?.(
                  workout.id
                )
              }
            />
          </View>
        )
      )}
    </View>
  );
}