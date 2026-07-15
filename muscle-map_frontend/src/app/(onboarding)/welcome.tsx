import React from "react";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

import OnboardingLayout from "@/components/Layouts/OnboardingLayout/OnboardingLayout";
import AppText from "@/components/AppText/AppText";

import { Spacing } from "@/theme/Spacing";
import Colors from "@/theme/Colors";

import AppLogo from "@/components/AppLogo/AppLogo";

export default function Welcome() {
  return (
    <OnboardingLayout
      title={"Welcome to\nMuscle Map"}
      subtitle="Let's build your personalized fitness journey in under a minute."
      currentStep={1}
      totalSteps={6}
      buttonTitle="Get Started"
      onButtonPress={() => router.push("/(onboarding)/gender")}
      showBackButton={false}
    >
      <View style={styles.container}>
        <View style={styles.hero}>
          <AppLogo size={180} showTitle={false} />
        </View>

        <AppText
          variant="body"
          color={Colors.textSecondary}
          style={styles.description}
        >
          We'll ask you a few quick questions to personalize your workouts and
          progress tracking.
        </AppText>
      </View>
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",
  },

  hero: {
    justifyContent: "center",

    alignItems: "center",

    marginBottom: 28,
  },
  emoji: {
    fontSize: 140,
  },

  description: {
    textAlign: "center",

    lineHeight: 26,

    paddingHorizontal: 20,

    maxWidth: 320,
  },
});
