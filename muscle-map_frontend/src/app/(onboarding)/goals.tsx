import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppText from "@/components/AppText/AppText";
import OnboardingLayout from "@/components/Layouts/OnboardingLayout/OnboardingLayout";
import SelectionGroup from "@/components/Onboarding/SelectionGroup";

import {
  STEPS,
  TOTAL_ONBOARDING_STEPS,
} from "@/components/Onboarding/OnboardingSteps";
import { Spacing } from "@/theme/Spacing";

import { useOnboarding } from "@/contexts/OnboardingContext";

const goalOptions = [
  {
    label: "Build Muscle",
    value: "BUILD_MUSCLE",
    icon: "barbell",
    subtitle: "Gain size and lean muscle",
  },
  {
    label: "Lose Weight",
    value: "FAT_LOSS",
    icon: "flame",
    subtitle: "Burn fat and get leaner",
  },
  {
    label: "Gain Strength",
    value: "GET_STRONGER",
    icon: "fitness",
    subtitle: "Increase power and lifts",
  },
];

export default function GoalScreen() {
  const { onboardingData, updateOnboarding } = useOnboarding();

  const [goal, setGoal] = useState(onboardingData.fitnessGoal || "");

  function handleSelect(value: string) {
    setGoal(value);

    updateOnboarding({
      fitnessGoal: value,
    });

    setTimeout(() => {
      router.push("/(onboarding)/T&C");
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
        <AppText variant="h2">Choose you goal</AppText>

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
