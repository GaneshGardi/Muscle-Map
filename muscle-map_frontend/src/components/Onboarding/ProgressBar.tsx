import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
} from "react-native";

import Colors from "@/theme/Colors";

interface Props {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
}: Props) {

  const progress = useRef(
    new Animated.Value(currentStep / totalSteps)
  ).current;

  useEffect(() => {

    Animated.timing(progress, {
      toValue: currentStep / totalSteps,
      duration: 350,
      useNativeDriver: false,
    }).start();

  }, [currentStep]);

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.track}>

      <Animated.View
        style={[
          styles.fill,
          {
            width,
          },
        ]}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 6,

    width: "100%",

    backgroundColor: "#DDDDDD",

    borderRadius: 999,

    overflow: "hidden",
  },

  fill: {
    height: "100%",

    backgroundColor: Colors.primary,

    borderRadius: 999,
  },
});