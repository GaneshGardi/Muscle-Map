import React, { useState } from "react";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

import OnboardingLayout from "@/components/Layouts/OnboardingLayout/OnboardingLayout";
import SelectionGroup from "@/components/Onboarding/SelectionGroup";
import AppText from "@/components/AppText/AppText";

import Colors from "@/theme/Colors";
import { Spacing } from "@/theme/Spacing";
import {
  STEPS,
  TOTAL_ONBOARDING_STEPS,
} from "@/components/Onboarding/OnboardingSteps";

import { useOnboarding } from "@/contexts/OnboardingContext";

const genderOptions = [
  {
    label: "Male",
    value: "MALE",
    icon: "male",
  },
  {
    label: "Female",
    value: "FEMALE",
    icon: "female",
  },
  {
    label: "Other",
    value: "OTHER",
    icon: "transgender",
  },
];

export default function GenderScreen() {
  const [gender, setGender] = useState("");

  const { updateOnboarding } = useOnboarding();

  function handleSelect(value: string) {
    setGender(value);

    updateOnboarding({
      gender: value,
    });

    setTimeout(() => {
      router.push("/(onboarding)/height");
    }, 250);
  }

  return (
    <OnboardingLayout
      title="Tell us about yourself"
      subtitle="This helps us personalize your fitness journey."
      currentStep={STEPS.GENDER}
      totalSteps={TOTAL_ONBOARDING_STEPS}
    >
      <View style={styles.container}>
        <AppText variant="h2">Which gender best describes you?</AppText>

        <View style={styles.cards}>
          <SelectionGroup
            options={genderOptions}
            selectedValue={gender}
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

  description: {
    marginTop: Spacing.sm,
    marginBottom: Spacing.xl,
    lineHeight: 24,
  },

  cards: {
    marginTop: Spacing.sm,
  },
});
