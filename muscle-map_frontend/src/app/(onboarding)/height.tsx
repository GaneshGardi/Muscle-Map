import { router } from "expo-router";

import HeightPicker from "@/components/Onboarding/HeightPicker/HeightPicker";
import OnboardingLayout from "@/components/Layouts/OnboardingLayout/OnboardingLayout";
import {
  STEPS,
  TOTAL_ONBOARDING_STEPS,
} from "@/components/Onboarding/OnboardingSteps";

import { useState } from "react";
import { useOnboarding } from "@/contexts/OnboardingContext";

export default function HeightScreen() {
  const { onboardingData, updateOnboarding } = useOnboarding();

  const [height, setHeight] = useState(onboardingData.height || 171);

  function handleContinue() {
    updateOnboarding({
      height,
    });

    router.push("/(onboarding)/weight");
  }

  return (
    <OnboardingLayout
      currentStep={STEPS.HEIGHT}
      totalSteps={TOTAL_ONBOARDING_STEPS}
      title="How tall are you?"
      subtitle="We'll use your height to personalize your calorie and workout recommendations."
      buttonTitle="Continue"
      onButtonPress={() => {
        updateOnboarding({
          height,
        });
        router.push("/(onboarding)/weight");
      }}
    >
      <HeightPicker value={height} onChange={setHeight} />
    </OnboardingLayout>
  );
}
