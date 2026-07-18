import { router } from "expo-router";

import BirthdayPicker from "@/components/Onboarding/Birthday/BirthdayPicker";
import OnboardingLayout from "@/components/Layouts/OnboardingLayout/OnboardingLayout";

export default function BirthdayScreen() {
  return (
    <OnboardingLayout
      currentStep={5}
      totalSteps={9}
      title="What's your birthday?"
      subtitle="We'll use your age to personalize your recommendations."
      buttonTitle="Continue"
      onButtonPress={() => router.push("/(onboarding)/goals")}
    >
      <BirthdayPicker />
    </OnboardingLayout>
  );
}