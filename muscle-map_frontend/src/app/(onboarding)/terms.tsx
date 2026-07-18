import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppText from "@/components/AppText/AppText";
import OnboardingLayout from "@/components/Layouts/OnboardingLayout/OnboardingLayout";
import AgreementCheckbox from "@/components/Onboarding/Terms/AgreementCheckbox";
import CompletionCelebration from "@/components/Onboarding/Completion/CompletionCelebration";

import {
  STEPS,
  TOTAL_ONBOARDING_STEPS,
} from "@/components/Onboarding/OnboardingSteps";

import Colors from "@/theme/Colors";
import { Spacing } from "@/theme/Spacing";

export default function TermsScreen() {

  const [accepted, setAccepted] = useState(false);

  const [showCelebration, setShowCelebration] = useState(false);


  function handleGetStarted() {

    if (!accepted) return;


    setShowCelebration(true);


    setTimeout(() => {

      router.replace("/(tabs)/home");

    }, 1800);
  }


  function openTerms() {
    console.log("Open Terms");
  }


  function openPrivacy() {
    console.log("Open Privacy");
  }


  return (
    <View style={styles.screen}>

      <OnboardingLayout
        title="Almost there!"
        subtitle="Before we create your personalized fitness plan, please review and accept our terms."
        currentStep={STEPS.TERMS}
        totalSteps={TOTAL_ONBOARDING_STEPS}
        buttonTitle="Get Started"
        buttonDisabled={!accepted}
        onButtonPress={handleGetStarted}
      >

        <View style={styles.container}>

          <View style={styles.iconContainer}>
            <Ionicons
              name="shield-checkmark"
              size={72}
              color={Colors.primary}
            />
          </View>


          <AgreementCheckbox
            checked={accepted}
            onToggle={() => setAccepted(!accepted)}
            onPressTerms={openTerms}
            onPressPrivacy={openPrivacy}
          />


          <AppText
            variant="caption"
            color={Colors.textSecondary}
            style={styles.footer}
          >
            By tapping Get Started, you agree to our Terms & Conditions and
            Privacy Policy.
          </AppText>


        </View>


      </OnboardingLayout>


      <CompletionCelebration
        visible={showCelebration}
      />


    </View>
  );
}


const styles = StyleSheet.create({

  screen: {
    flex: 1,
  },


  container: {
    flex: 1,
    justifyContent: "center",
  },


  iconContainer: {
    alignItems: "center",
    marginBottom: Spacing.xxxl,
  },


  footer: {
    marginTop: Spacing.xl,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: Spacing.sm,
  },

});