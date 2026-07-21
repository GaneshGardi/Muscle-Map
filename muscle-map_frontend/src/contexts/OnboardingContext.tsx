import React, {
  createContext,
  useContext,
  useState,
} from "react";

import { OnboardingData } from "@/types/Onboarding";

interface OnboardingContextType {
  onboardingData: OnboardingData;

  updateOnboarding: (
    data: Partial<OnboardingData>
  ) => void;

  resetOnboarding: () => void;
}

const initialData: OnboardingData = {
  gender: "",

  height: 0,

  weight: 0,

  birthDate: "",

  fitnessGoal: "",

  acceptedTerms: false,
};

const OnboardingContext =
  createContext<OnboardingContextType | null>(
    null
  );

export function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [onboardingData, setOnboardingData] =
    useState(initialData);

  const updateOnboarding = (
    data: Partial<OnboardingData>
  ) => {
    setOnboardingData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const resetOnboarding = () => {
    setOnboardingData(initialData);
  };

  return (
    <OnboardingContext.Provider
      value={{
        onboardingData,
        updateOnboarding,
        resetOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context =
    useContext(OnboardingContext);

  if (!context) {
    throw new Error(
      "useOnboarding must be used inside OnboardingProvider"
    );
  }

  return context;
}