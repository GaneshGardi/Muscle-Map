import React, { useState } from "react";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

import OnboardingLayout from "@/components/Layouts/OnboardingLayout/OnboardingLayout";
import SelectionGroup from "@/components/Onboarding/SelectionGroup";
import AppText from "@/components/AppText/AppText";

import { Spacing } from "@/theme/Spacing";
import {
  STEPS,
  TOTAL_ONBOARDING_STEPS,
} from "@/components/Onboarding/OnboardingSteps";

const goalOptions = [
  {
    label: "Build Muscle",
    value: "BUILD_MUSCLE",
    icon: "barbell",
    subtitle: "Gain size and lean muscle",
  },
  {
    label: "Lose Weight",
    value: "LOSE_WEIGHT",
    icon: "flame",
    subtitle: "Burn fat and get leaner",
  },
  {
    label: "Gain Strength",
    value: "GAIN_STRENGTH",
    icon: "fitness",
    subtitle: "Increase power and lifts",
  },
];

export default function GoalScreen() {
  const [goal, setGoal] = useState("");

  function handleSelect(value: string) {
    setGoal(value);

    // TODO:
    // Save to onboarding context/API later

    setTimeout(() => {
      router.push("/(onboarding)/terms");
    }, 250);
  }

  return (
    <OnboardingLayout
      title="What's your goal?"
      subtitle="We'll personalize your workouts based on what you want to achieve."
      currentStep={STEPS.GOAL}
      totalSteps={TOTAL_ONBOARDING_STEPS}
    >
      <View style={styles.container}>
        <AppText variant="h2">
          Choose you goal
        </AppText>

        <View style={styles.cards}>
          <SelectionGroup
            options={goalOptions}
            selectedValue={goal}
            onSelect={handleSelect}
          />
        </View>
      </View>
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cards: {
    marginTop: Spacing.sm,
  },
});