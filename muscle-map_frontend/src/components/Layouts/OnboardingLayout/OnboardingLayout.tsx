import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

import AppButton from "../../AppButton/AppButton";
import OnboardingHeader from "../../Onboarding/OnboardingHeader";
import Screen from "../../Screen/Screen";

import { Spacing } from "@/theme/Spacing";

interface Props {
  title: string;
  subtitle?: string;

  currentStep: number;
  totalSteps: number;

  children: React.ReactNode;

  buttonTitle?: string;

  onButtonPress?: () => void;

  buttonDisabled?: boolean;

  buttonLoading?: boolean;

  centerContent?: boolean;

  showBackButton?: boolean;
}

export default function OnboardingLayout({
  title,
  subtitle,

  currentStep,
  totalSteps,

  children,

  buttonTitle,
  onButtonPress,

  buttonDisabled = false,
  buttonLoading = false,

  centerContent = false,
  showBackButton= true,

}: Props) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(18)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),

      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        {/* Fixed Header */}

        <OnboardingHeader
    title={title}
    subtitle={subtitle}
    currentStep={currentStep}
    totalSteps={totalSteps}
    showBackButton={showBackButton}
/>

        {/* Animated Content */}

        <Animated.View
          style={[
            styles.content,
            centerContent && styles.centerContent,
            {
              opacity,
              transform: [{ translateY }],
            },
          ]}
        >
          {children}
        </Animated.View>

        {/* Optional Bottom Button */}

        {buttonTitle && (
          <View style={styles.footer}>
            <AppButton
              title={buttonTitle}
              onPress={onButtonPress}
              disabled={buttonDisabled}
              loading={buttonLoading}
            />
          </View>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Spacing.xxl,
  },

  content: {
    flex: 1,

    paddingTop: Spacing.xl,
  },

  centerContent: {
    justifyContent: "center",
  },

  footer: {
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
  },
});
