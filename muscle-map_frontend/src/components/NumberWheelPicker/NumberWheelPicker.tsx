import React, {
  useEffect,
  useMemo,
  useRef,
} from "react";

import {
  StyleSheet,
  View,
} from "react-native";

import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import WheelItem, {
  ITEM_HEIGHT,
} from "./WheelItem";
import CenterHighlight from "./CenterHighlight";
import FadeOverlay from "./FadeOverlay";

interface Props {
  min: number;
  max: number;

  value: number;

  onValueChange: (value: number) => void;

  formatter?: (value: number) => string;

  showHighlight?: boolean;
}

const VISIBLE_ITEMS = 5;

export default function NumberWheelPicker({
  min,
  max,
  value,
  onValueChange,
  showHighlight = true,
}: Props) {
  const values = useMemo(() => {
    const data = Array.from(
      { length: max - min + 1 },
      (_, i) => min + i
    );

    return [null, null, ...data, null, null];
  }, [min, max]);

  const listRef =
    useRef<Animated.FlatList<any>>(null);

  const initialIndex = useMemo(
    () => value - min + 2,
    [value, min]
  );

  const scrollY = useSharedValue(
    initialIndex * ITEM_HEIGHT
  );

  const scrollToIndex = (
    index: number,
    animated = true
  ) => {
    listRef.current?.scrollToOffset({
      offset: index * ITEM_HEIGHT,
      animated,
    });
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      scrollToIndex(initialIndex, false);
    });
  }, [initialIndex]);

  const scrollHandler =
    useAnimatedScrollHandler({
      onScroll: (event) => {
        scrollY.value =
          event.contentOffset.y;
      },

      onMomentumEnd: (event) => {
        const index = Math.round(
          event.contentOffset.y /
            ITEM_HEIGHT
        );

        const minIndex = 2;
        const maxIndex =
          values.length - 3;

        const clampedIndex = Math.max(
          minIndex,
          Math.min(index, maxIndex)
        );

        if (
          clampedIndex !== index
        ) {
          runOnJS(scrollToIndex)(
            clampedIndex
          );
        }

        const selected =
          values[clampedIndex];

        if (
          selected !== null &&
          selected !== undefined
        ) {
          runOnJS(onValueChange)(
            selected
          );
        }
      },
    });

  return (
    <View style={styles.container}>
      {showHighlight && (
        <CenterHighlight />
      )}

      <Animated.FlatList
        ref={listRef}
        data={values}
        keyExtractor={(_, index) =>
          index.toString()
        }
        renderItem={({
          item,
          index,
        }) => (
          <WheelItem
            value={item}
            index={index}
            scrollY={scrollY}
          />
        )}
        showsVerticalScrollIndicator={
          false
        }
        bounces={false}
        alwaysBounceVertical={
          false
        }
        overScrollMode="never"
        snapToInterval={
          ITEM_HEIGHT
        }
        decelerationRate="fast"
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingVertical:
            (ITEM_HEIGHT *
              (VISIBLE_ITEMS -
                1)) /
            2,
        }}
      />

      <FadeOverlay />
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      height:
        ITEM_HEIGHT *
        VISIBLE_ITEMS,

      justifyContent:
        "center",

      overflow: "hidden",
    },
  });