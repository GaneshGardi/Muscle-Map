import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";
import AppInput from "../../components/AppInput/AppInput";
import AppButton from "../../components/AppButton/AppButton";
import AuthFooter from "../../components/AuthFooter/AuthFooter";
import AppFormMessage from "../../components/AppFormMessage/AppFormMessage";

import KeyboardScreen from "../../components/Keyboard/KeyboardScreen";
import Spacer from "@/components/Spacer/Spacer";

export default function Signup() {
  return (
    <KeyboardScreen>
      <AuthLayout
        showLogo
        title={"Create your\nAccount"}
        subtitle="Join Muscle Map and start building your fitness journey."
        footer={
          <AuthFooter
            question="Already have an account?"
            action="Login"
            onPress={() => router.replace("/(auth)/login")}
          />
        }
      >
        {/* Backend errors */}
        {/*
        <AppFormMessage
          type="error"
          message="Email already exists."
        />
        */}

        <AppInput
          label="Full Name"
          placeholder="Enter your full name"
          leftIcon="person-outline"
        />

        <Spacer/>

        <AppInput
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon="mail-outline"
        />

        <Spacer/>

        <AppInput
          label="Password"
          placeholder="Create a password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon="lock-closed-outline"
        />

        <Spacer/>

        <AppInput
          label="Confirm Password"
          placeholder="Confirm your password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon="lock-closed-outline"
        />

        <Spacer size={28} />

        <AppButton
          title="Create Account"
          onPress={() => {}}
        />
      </AuthLayout>
    </KeyboardScreen>
  );
}

const styles = StyleSheet.create({
  spacing: {
    height: 16,
  },

  buttonSpacing: {
    height: 28,
  },
});