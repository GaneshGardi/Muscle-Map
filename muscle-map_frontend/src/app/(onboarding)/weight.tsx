import { router } from "expo-router";

import OnboardingLayout from "@/components/Layouts/OnboardingLayout/OnboardingLayout";
import WeightPicker from "@/components/Onboarding/Weight/WeightPicker";

import { useState } from "react";
import { useOnboarding } from "@/contexts/OnboardingContext";

import {
  STEPS,
  TOTAL_ONBOARDING_STEPS,
} from "@/components/Onboarding/OnboardingSteps";

export default function WeightScreen() {
  const { onboardingData, updateOnboarding } = useOnboarding();

  const [weight, setWeight] = useState(onboardingData.weight || 69);

  return (
    <OnboardingLayout
      currentStep={STEPS.WEIGHT}
      totalSteps={TOTAL_ONBOARDING_STEPS}
      title="How much do you weigh?"
      subtitle="Your weight helps us calculate calories, macros and create a personalized fitness plan."
      buttonTitle="Continue"
      onButtonPress={() => {
        updateOnboarding({
          weight,
        });

        router.push("/(onboarding)/birthday");
      }}
    >
      <WeightPicker value={weight} onChange={setWeight} />
    </OnboardingLayout>
  );
}
