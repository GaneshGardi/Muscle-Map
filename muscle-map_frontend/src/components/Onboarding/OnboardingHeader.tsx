import React from "react";
import {
  Pressable,
  StyleSheet,
  View,
} from "react-native";

import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../AppText/AppText";
import ProgressBar from "./ProgressBar";

import Colors from "@/theme/Colors";
import { Spacing } from "@/theme/Spacing";

interface Props {
  title: string;
  subtitle?: string;

  currentStep: number;
  totalSteps: number;

  showBackButton?: boolean;
}

export default function OnboardingHeader({
  title,
  subtitle,
  currentStep,
  totalSteps,
  showBackButton = true,
}: Props) {
  return (
    <View style={styles.container}>

      {showBackButton && (
        <View style={styles.topRow}>

          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={Colors.text}
            />
          </Pressable>

          <View style={styles.progress}>
            <ProgressBar
              currentStep={currentStep}
              totalSteps={totalSteps}
            />
          </View>

        </View>
      )}

      <View style={styles.textContainer}>

        <AppText variant="display">
          {title}
        </AppText>

        {subtitle ? (
          <AppText
            variant="body"
            color={Colors.textSecondary}
            style={styles.subtitle}
          >
            {subtitle}
          </AppText>
        ) : null}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: Spacing.sm,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 20,
  },

  backButton: {
    width: 34,
    height: 34,

    justifyContent: "center",
    alignItems: "center",
  },

  progress: {
    flex: 1,

    marginLeft: 10,
  },

  textContainer: {
    marginTop: 6,
  },

  subtitle: {
    marginTop: Spacing.sm,
  },
});