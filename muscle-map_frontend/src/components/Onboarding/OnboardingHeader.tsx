import React from "react";
import {
  View,
  Pressable,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../AppText/AppText";
import ProgressBar from "./ProgressBar";

import Colors from "@/theme/Colors";

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
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons
              name="chevron-back"
              size={26}
              color={Colors.text}
            />
          </Pressable>

          <View style={styles.progressContainer}>
            <ProgressBar
              currentStep={currentStep}
              totalSteps={totalSteps}
            />
          </View>

        </View>
      )}

      <View style={styles.textContainer}>

        <AppText
          variant="display"
          style={styles.title}
        >
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

    paddingTop: 8,

    marginBottom: 12,
  },

  topRow: {

    flexDirection: "row",

    alignItems: "center",

    marginBottom: 36,
  },

  backButton: {

    width: 42,

    height: 42,

    justifyContent: "center",

    alignItems: "center",

    marginRight: 14,
  },

  progressContainer: {

    flex: 1,
  },

  textContainer: {

  },

  title: {

    fontSize: 34,

    lineHeight: 40,

    fontWeight: "700",
  },

  subtitle: {

    marginTop: 12,

    fontSize: 16,

    lineHeight: 24,
  },

});