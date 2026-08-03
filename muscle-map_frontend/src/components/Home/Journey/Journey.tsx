import React, { useCallback, useRef, useState } from "react";
import {
  Animated,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from "react-native";

import { journeyData } from "@/components/Home/Data/journeyData";

import WeekSection from "./Week/WeekSection";

import styles from "./Journey.styles";

export default function Journey() {
  const scrollViewRef = useRef<ScrollView>(null);
  const weekOffsets = useRef<Record<string, number>>({});
  const minScrollY = useRef<number | null>(null);
  const [hasScrolledToCurrent, setHasScrolledToCurrent] =
    useState(false);

  const opacity = useRef(new Animated.Value(0)).current;

  // Week 1 at the bottom, later weeks progress upward.
  const reversedWeeks = [...journeyData].reverse();

  const currentWeekId = journeyData.find((week) =>
    week.workouts.some((workout) => workout.state === "current")
  )?.id;

  const handleWorkoutPress = (workoutId: string) => {
    console.log("Workout selected:", workoutId);
  };

  const handleWeekLayout = useCallback(
    (weekId: string) => (event: LayoutChangeEvent) => {
      weekOffsets.current[weekId] = event.nativeEvent.layout.y;

      if (
        !hasScrolledToCurrent &&
        weekId === currentWeekId &&
        currentWeekId
      ) {
        const targetY = weekOffsets.current[weekId];

        minScrollY.current = targetY;

        scrollViewRef.current?.scrollTo({
          y: targetY,
          animated: false,
        });

        setHasScrolledToCurrent(true);

        Animated.timing(opacity, {
          toValue: 1,
          duration: 220,
          useNativeDriver: true,
        }).start();
      }
    },
    [currentWeekId, hasScrolledToCurrent, opacity]
  );

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (minScrollY.current === null) return;

      const currentY = event.nativeEvent.contentOffset.y;

      // Block scrolling down past the current week (into completed weeks).
      if (currentY < minScrollY.current) {
        scrollViewRef.current?.scrollTo({
          y: minScrollY.current,
          animated: false,
        });
      }
    },
    []
  );

  // Running total so left/right alternation flows continuously across weeks.
  let runningPosition = 0;

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        bounces={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.content}
        style={{ opacity }}
      >
        {reversedWeeks.map((week, index) => {
          const positionOffset = runningPosition;
          runningPosition += week.workouts.length;

          return (
            <React.Fragment key={week.id}>
              {index !== 0 && <View style={styles.weekBridge} />}

              <View onLayout={handleWeekLayout(week.id)}>
                <WeekSection
                  week={week}
                  isCurrent={week.id === currentWeekId}
                  positionOffset={positionOffset}
                  onWorkoutPress={handleWorkoutPress}
                />
              </View>
            </React.Fragment>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
}