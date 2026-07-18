import React, { useEffect, useMemo, useRef } from "react";

import {
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import AppText from "@/components/AppText/AppText";
import Colors from "@/theme/Colors";

interface Props {
  value: number;
  unit: "kg" | "lb";
  onValueChange: (value: number) => void;
}

const MIN_WEIGHT = 20;
const MAX_WEIGHT = 300;

const STEP = 0.1;

const TICK_SPACING = 10;

const MAJOR_EVERY = 10;
const MEDIUM_EVERY = 5;

export default function WeightRuler({
  value,
  unit,
  onValueChange,
}: Props) {
  const { width } = useWindowDimensions();

  const sidePadding =
    width / 2 - TICK_SPACING / 2;

  const listRef =
    useRef<Animated.FlatList<number>>(null);

  const weights = useMemo(() => {
    return Array.from(
      {
        length:
          (MAX_WEIGHT - MIN_WEIGHT) * 10 + 1,
      },
      (_, i) =>
        Number(
          (
            MIN_WEIGHT +
            i * STEP
          ).toFixed(1)
        )
    );
  }, []);

  useEffect(() => {
    const index = Math.round(
      (value - MIN_WEIGHT) / STEP
    );

    requestAnimationFrame(() => {
      listRef.current?.scrollToOffset({
        offset:
          index * TICK_SPACING,
        animated: false,
      });
    });
  }, [unit]);

  const scrollHandler = useAnimatedScrollHandler({
  onMomentumEnd: (event) => {
    const index = Math.round(
      event.contentOffset.x / TICK_SPACING
    );

    const clamped = Math.max(
      0,
      Math.min(index, weights.length - 1)
    );

    runOnJS(onValueChange)(weights[clamped]);
  },
});
      return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <AppText style={styles.value}>
          {value.toFixed(1)}
        </AppText>

        <AppText style={styles.unit}>
          {unit}
        </AppText>
      </View>

      <View style={styles.rulerContainer}>
        <View style={styles.centerIndicator} />

        <Animated.FlatList
          ref={listRef}
          horizontal
          data={weights}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item, index }) => {
            const major =
              index % MAJOR_EVERY === 0;

            const medium =
              index % MEDIUM_EVERY === 0;

            return (
              <View style={styles.tickWrapper}>
                <View
                  style={[
                    styles.tick,
                    major
                      ? styles.majorTick
                      : medium
                      ? styles.mediumTick
                      : styles.minorTick,
                  ]}
                />

                {major && (
                  <AppText style={styles.tickLabel}>
                    {Math.round(item)}
                  </AppText>
                )}
              </View>
            );
          }}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          overScrollMode="never"
        //   snapToInterval={TICK_SPACING}
          snapToAlignment="center"
          decelerationRate="fast"
          onScroll={scrollHandler}
          scrollEventThrottle={70}
          contentContainerStyle={{
            paddingHorizontal: sidePadding,
          }}
          initialNumToRender={80}
          windowSize={7}
          removeClippedSubviews={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    alignItems: "center",
  },

  valueContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 48,
  },

  value: {
    fontSize: 64,
    fontWeight: "700",
    color: Colors.primary,
    lineHeight: 72,
  },

  unit: {
    marginLeft: 8,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "600",
    color: Colors.primary,
  },

  rulerContainer: {
    width: "100%",
    height: 120,
    justifyContent: "center",
  },

  centerIndicator: {
    position: "absolute",
    alignSelf: "center",
    width: 4,
    height: 82,
    borderRadius: 999,
    backgroundColor: Colors.primary,
    zIndex: 100,
  },

  tickWrapper: {
    width: TICK_SPACING,
    alignItems: "center",
  },

  tick: {
    width: 2,
    borderRadius: 999,
    backgroundColor: "#D5D5D5",
  },

  majorTick: {
    height: 44,
    backgroundColor: "#BDBDBD",
  },

  mediumTick: {
    height: 30,
  },

  minorTick: {
    height: 18,
  },

  tickLabel: {
    marginTop: 8,
    fontSize: 11,
    color: "#9A9A9A",
  },
});