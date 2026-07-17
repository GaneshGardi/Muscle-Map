import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "@/theme/Colors";

export default function FadeOverlay() {
  return (
    <>
      {/* Top Fade */}

      <LinearGradient
        colors={[
          Colors.background,
          "rgba(250,250,247,0.85)",
          "rgba(250,250,247,0)",
        ]}
        style={[styles.fade, styles.top]}
        pointerEvents="none"
      />

      {/* Bottom Fade */}

      <LinearGradient
        colors={[
          "rgba(250,250,247,0)",
          "rgba(250,250,247,0.85)",
          Colors.background,
        ]}
        style={[styles.fade, styles.bottom]}
        pointerEvents="none"
      />
    </>
  );
}

const styles = StyleSheet.create({
  fade: {
    position: "absolute",

    left: 0,
    right: 0,

    height: 90,

    zIndex: 5,
  },

  top: {
    top: 0,
  },

  bottom: {
    bottom: 0,
  },
});