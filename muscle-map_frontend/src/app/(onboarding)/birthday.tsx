import { router } from "expo-router";

import BirthdayPicker from "@/components/Onboarding/Birthday/BirthdayPicker";
import OnboardingLayout from "@/components/Layouts/OnboardingLayout/OnboardingLayout";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { useState } from "react";

export default function BirthdayScreen() {
  const { onboardingData, updateOnboarding } = useOnboarding();

  const [birthDate, setBirthDate] = useState(onboardingData.birthDate || "");

  return (
    <OnboardingLayout
      currentStep={5}
      totalSteps={9}
      title="What's your birthday?"
      subtitle="We'll use your age to personalize your recommendations."
      buttonTitle="Continue"
      onButtonPress={() => {
        updateOnboarding({
          birthDate,
        });

        router.push("/(onboarding)/goals");
      }}
    >
      <BirthdayPicker value={birthDate} onChange={setBirthDate} />
    </OnboardingLayout>
  );
}
