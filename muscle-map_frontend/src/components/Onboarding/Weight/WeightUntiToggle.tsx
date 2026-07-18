import React from "react";
import {
  Pressable,
  StyleSheet,
  View,
} from "react-native";

import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import AppText from "@/components/AppText/AppText";
import Colors from "@/theme/Colors";

interface Props {
  value: "kg" | "lb";
  onChange: (value: "kg" | "lb") => void;
}

export default function WeightUnitToggle({
  value,
  onChange,
}: Props) {
  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            value === "kg" ? 0 : 84,
            {
              damping: 18,
              stiffness: 180,
            }
          ),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.indicator,
          indicatorStyle,
        ]}
      />

      <Pressable
        style={styles.option}
        onPress={() => onChange("kg")}
      >
        <AppText
          style={[
            styles.text,
            value === "kg" &&
              styles.activeText,
          ]}
        >
          KG
        </AppText>
      </Pressable>

      <Pressable
        style={styles.option}
        onPress={() => onChange("lb")}
      >
        <AppText
          style={[
            styles.text,
            value === "lb" &&
              styles.activeText,
          ]}
        >
          LB
        </AppText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",

    flexDirection: "row",

    width: 168,
    height: 52,

    backgroundColor: "#F3F3F3",

    borderRadius: 26,

    padding: 4,

    marginTop: 12,

    position: "relative",
  },

  indicator: {
    position: "absolute",

    top: 4,
    left: 4,

    width: 80,
    height: 44,

    borderRadius: 22,

    backgroundColor: Colors.primary,
  },

  option: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    zIndex: 2,
  },

  text: {
    fontSize: 16,
    fontWeight: "600",

    color: "#888",
  },

  activeText: {
    color: "#FFF",
  },
});