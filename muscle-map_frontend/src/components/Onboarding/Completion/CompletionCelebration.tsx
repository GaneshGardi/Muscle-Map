import React from "react";
import { StyleSheet, View } from "react-native";

import ConfettiCannon from "react-native-confetti-cannon";

import AppText from "@/components/AppText/AppText";

import Colors from "@/theme/Colors";
import { Spacing } from "@/theme/Spacing";

interface Props {
  visible: boolean;
}

export default function CompletionCelebration({
  visible,
}: Props) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>

      <ConfettiCannon
        count={120}
        origin={{
          x: -10,
          y: 0,
        }}
        fadeOut
        fallSpeed={3000}
      />

      <View style={styles.content}>

        <AppText variant="h1">
          🎉
        </AppText>

        <AppText
          variant="h1"
          style={styles.title}
        >
          Welcome to Muscle Map
        </AppText>

        <AppText
          variant="body"
          color={Colors.textSecondary}
          style={styles.subtitle}
        >
          Your personalized fitness journey
          starts now.
        </AppText>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  overlay: {
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: Colors.background,

    justifyContent: "center",

    alignItems: "center",

    zIndex: 100,
  },


  content: {
    alignItems: "center",

    paddingHorizontal: Spacing.xl,
  },


  title: {
    textAlign: "center",

    marginTop: Spacing.md,
  },


  subtitle: {
    textAlign: "center",

    marginTop: Spacing.sm,
  },

});