import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Animated,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from "react-native";

import { journeyData } from "@/components/Home/Data/journeyData";

import CurrentWorkoutCard from "../Hero/CurrentWorkoutCard";
import WeekSection from "./Week/WeekSection";

import styles from "./Journey.styles";

const BANNER_HEIGHT = 84;
const SCROLL_TOP_PADDING = BANNER_HEIGHT + 14;

export default function Journey() {
  const scrollViewRef = useRef<ScrollView>(null);
  const weekOffsets = useRef<Record<string, number>>({});
  const minScrollY = useRef<number | null>(null);
  const [hasScrolledToCurrent, setHasScrolledToCurrent] =
    useState(false);

  const opacity = useRef(new Animated.Value(0)).current;

  const reversedWeeks = useMemo(() => [...journeyData].reverse(), []);

  const currentWeekId = useMemo(
    () =>
      journeyData.find((week) =>
        week.workouts.some((workout) => workout.state === "current")
      )?.id,
    []
  );

  const [activeWeekId, setActiveWeekId] = useState(currentWeekId);

  const activeWeek = journeyData.find((week) => week.id === activeWeekId);

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
        const clampedTargetY = Math.max(targetY - SCROLL_TOP_PADDING, 0);

        minScrollY.current = clampedTargetY;

        scrollViewRef.current?.scrollTo({
          y: clampedTargetY,
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
      const currentY = event.nativeEvent.contentOffset.y;

      if (minScrollY.current !== null && currentY < minScrollY.current) {
        scrollViewRef.current?.scrollTo({
          y: minScrollY.current,
          animated: false,
        });
        return;
      }

      // Find whichever week header has scrolled past the top edge —
      // that becomes the "active" week shown in the sticky banner.
      let candidateId: string | undefined;
      let candidateOffset = -Infinity;

      for (const [weekId, offset] of Object.entries(
        weekOffsets.current
      )) {
        if (
          offset <= currentY + SCROLL_TOP_PADDING &&
          offset > candidateOffset
        ) {
          candidateOffset = offset;
          candidateId = weekId;
        }
      }

      if (candidateId && candidateId !== activeWeekId) {
        setActiveWeekId(candidateId);
      }
    },
    [activeWeekId]
  );

  let runningPosition = 0;

  return (
    <View style={styles.container}>
      {activeWeek && (
        <View style={styles.bannerWrapper}>
          <CurrentWorkoutCard
            weekNumber={activeWeek.weekNumber}
            title={activeWeek.title}
          />
        </View>
      )}

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