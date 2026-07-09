import { router } from "expo-router";

import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";
import KeyboardScreen from "../../components/Keyboard/KeyboardScreen";

import AppInput from "../../components/AppInput/AppInput";
import AppButton from "../../components/AppButton/AppButton";
import AuthFooter from "../../components/AuthFooter/AuthFooter";
import AppFormMessage from "../../components/AppFormMessage/AppFormMessage";
import Spacer from "../../components/Spacer/Spacer";

export default function ForgotPassword() {
  return (
    <KeyboardScreen>
      <AuthLayout
        showLogo
        title={"Forgot\nPassword?"}
        subtitle="No worries! Enter your email address and we'll help you reset your password."
        footer={
          <AuthFooter
            question="Remember your password?"
            action="Login"
            onPress={() => router.replace("/(auth)/login")}
          />
        }
      >
        {/* Backend Errors */}
        {/*
        <AppFormMessage
          type="error"
          message="No account found with this email."
        />
        */}

        {/* Success Message */}
        {/*
        <AppFormMessage
          type="success"
          message="Password reset link sent successfully."
        />
        */}

        <AppInput
          label="Email Address"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon="mail-outline"
        />

        <Spacer size={28} />

        <AppButton
          title="Send Reset Link"
          onPress={() => {}}
        />
      </AuthLayout>
    </KeyboardScreen>
  );
}