import React from "react";
import { View, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function HeroBackground() {
  return (
    <View
      pointerEvents="none"
      style={StyleSheet.absoluteFill}
    >
      {/* Orange Glow */}
      <LinearGradient
        colors={[
          "rgba(255,120,60,0.10)",
          "transparent",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 1 }}
        style={styles.orangeGlow}
      />

      {/* Top Highlight */}
      <LinearGradient
        colors={[
          "rgba(255,255,255,0.18)",
          "transparent",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.topHighlight}
      />

      {/* Muscle Image Placeholder */}
      <View style={styles.imagePlaceholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  orangeGlow: {
    position: "absolute",

    left: -60,
    top: -80,

    width: 220,
    height: 220,

    borderRadius: 220,
  },

  topHighlight: {
    position: "absolute",

    top: 0,

    left: 0,

    right: 0,

    height: 120,
  },

  imagePlaceholder: {
    position: "absolute",

    right: 0,

    top: 0,

    bottom: 0,

    width: 170,
  },
});