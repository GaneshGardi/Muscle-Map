import { router } from "expo-router";

import HeightPicker from "@/components/Onboarding/HeightPicker/HeightPicker";
import OnboardingLayout from "@/components/Layouts/OnboardingLayout/OnboardingLayout";
import { STEPS, TOTAL_ONBOARDING_STEPS } from "@/components/Onboarding/OnboardingSteps";

export default function HeightScreen() {
  return (
    <OnboardingLayout 
      currentStep={STEPS.HEIGHT}
      totalSteps={TOTAL_ONBOARDING_STEPS}
      title="How tall are you?"
      subtitle="We'll use your height to personalize your calorie and workout recommendations."
      buttonTitle="Continue"
      onButtonPress={() => router.push("/(onboarding)/weight")}
    >
      <HeightPicker />
    </OnboardingLayout>
  );
}
