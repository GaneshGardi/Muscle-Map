import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

import AppButton from "../../components/AppButton/AppButton";
import AppInput from "../../components/AppInput/AppInput";
import AppText from "../../components/AppText/AppText";
import AuthFooter from "../../components/AuthFooter/AuthFooter";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";

import Divider from "@/components/Divider/Divider";
import KeyboardScreen from "@/components/Keyboard/KeyboardScreen";
import Colors from "../../theme/Colors";

export default function Login() {
  return (
    <KeyboardScreen>
      <AuthLayout
        showLogo
        title={"Continue your\nFitness Journey"}
        subtitle="Sign in to keep progressing towards your goals."
        footer={
          <AuthFooter
            question="Don't have an account?"
            action="Register"
            onPress={() => router.push("/(auth)/signup")}
          />
        }
      >
        {/* Uncomment when connecting backend */}
        {/*
      <AppFormMessage
        type="error"
        message="Invalid email or password."
      />
      */}

        <AppInput
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon="mail-outline"
        />

        <View style={styles.inputSpacing} />

        <AppInput
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon="lock-closed-outline"
        />

        <Pressable
          style={styles.forgotPassword}
          onPress={() => router.push("/(auth)/forgotPassword")}
        >
          <AppText variant="bodyMedium" color={Colors.primary}>
            Forgot Password?
          </AppText>
        </Pressable>

        <View style={styles.buttonSpacing} />

        <AppButton title="Continue" onPress={() => {}} />

        <Divider />
      </AuthLayout>
    </KeyboardScreen>
  );
}

const styles = StyleSheet.create({
  inputSpacing: {
    height: 16,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 12,
  },

  buttonSpacing: {
    height: 24,
  },
});
