import { router } from "expo-router";
import { StyleSheet } from "react-native";

import { useState } from "react";

import AppButton from "../../components/AppButton/AppButton";
import AppFormMessage from "../../components/AppFormMessage/AppFormMessage";
import AppInput from "../../components/AppInput/AppInput";
import AuthFooter from "../../components/AuthFooter/AuthFooter";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";

import Spacer from "@/components/Spacer/Spacer";
import KeyboardScreen from "../../components/Keyboard/KeyboardScreen";

import authService from "@/services/authService";
import { saveToken } from "@/storage/tokenStorage";

export default function Signup() {
  // throw new Error("this is signup screen");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async () => {

    //validation
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setError("");


      const response = await authService.signup({
        name,
        email,
        password,
      });

      await saveToken(response.token);

   
      router.replace("/(onboarding)/welcome");
    } catch (err: any) {
      console.log("Full error object:", err);
      setError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

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
        {/* { Backend errors} */}
        {
          <>
            <AppFormMessage type="error" message={error} />
            <Spacer />
          </>
        }

        <AppInput
          label="Full Name"
          placeholder="Enter your full name"
          leftIcon="person-outline"
          value={name}
          onChangeText={setName}
        />

        <Spacer />

        <AppInput
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon="mail-outline"
          value={email}
          onChangeText={setEmail}
        />

        <Spacer />

        <AppInput
          label="Password"
          placeholder="Create a password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon="lock-closed-outline"
          value={password}
          onChangeText={setPassword}
        />

        <Spacer />

        <AppInput
          label="Confirm Password"
          placeholder="Confirm your password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon="lock-closed-outline"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Spacer size={28} />

        <AppButton
          title={loading ? "Creating Account..." : "Create Account"}
          onPress={handleSignup}
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
