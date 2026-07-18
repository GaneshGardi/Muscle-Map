import { router } from "expo-router";

import OnboardingLayout from "@/components/Layouts/OnboardingLayout/OnboardingLayout";
import WeightPicker from "@/components/Onboarding/Weight/WeightPicker";

import {
  STEPS,
  TOTAL_ONBOARDING_STEPS,
} from "@/components/Onboarding/OnboardingSteps";

export default function WeightScreen() {
  return (
    <OnboardingLayout
      currentStep={STEPS.WEIGHT}
      totalSteps={TOTAL_ONBOARDING_STEPS}
      title="How much do you weigh?"
      subtitle="Your weight helps us calculate calories, macros and create a personalized fitness plan."
      buttonTitle="Continue"
      onButtonPress={() =>
        router.push("/(onboarding)/birthday")
      }
    >
      <WeightPicker />
    </OnboardingLayout>
  );
}