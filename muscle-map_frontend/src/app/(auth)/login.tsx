import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

import AppButton from "../../components/AppButton/AppButton";
import AppInput from "../../components/AppInput/AppInput";
import AppText from "../../components/AppText/AppText";
import AuthFooter from "../../components/AuthFooter/AuthFooter";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";

import Divider from "@/components/Divider/Divider";
import KeyboardScreen from "@/components/Keyboard/KeyboardScreen";
import Spacer from "@/components/Spacer/Spacer";
import Colors from "../../theme/Colors";

import authService from "@/services/authService";
import { saveToken } from "@/storage/tokenStorage";
import { useState } from "react";

import AppFormMessage from "@/components/AppFormMessage/AppFormMessage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    if (!email.trim()) {
      setError("Please enter email.");
      return;
    }
    if (!password.trim()) {
      setError("Please enter password.");
      return;
    }

    try {
      setLoading(true);

      const response = await authService.login({
        email,
        password,
      });

      await saveToken(response.token);

      //temporary
      router.replace("/(onboarding)/welcome");
    } catch (err: any) {
    
        setError(
          err?.response?.data?.message ?? "Something went wrong. Please try again."
        );
        console.log(err);
        console.log(err.response)
        console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

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
        {error ? <AppFormMessage type="error" message={error} /> : null}

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
          placeholder="Enter your password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon="lock-closed-outline"
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          style={styles.forgotPassword}
          onPress={() => router.push("/(auth)/forgotPassword")}
        >
          <AppText variant="bodyMedium" color={Colors.primary}>
            Forgot Password?
          </AppText>
        </Pressable>

        <Spacer size={24} />

        <AppButton title="Continue" loading={loading} onPress={handleLogin} />

        <Divider />
      </AuthLayout>
    </KeyboardScreen>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 12,
  },
});
