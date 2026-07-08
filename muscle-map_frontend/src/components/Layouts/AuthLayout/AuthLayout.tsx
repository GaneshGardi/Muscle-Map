import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";

import Screen from "../../Screen/Screen";
import AppLogo from "../../AppLogo/AppLogo";
import AuthHeader from "../../AuthHeader/AuthHeader";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  showLogo?: boolean;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
  showLogo = true,
}: AuthLayoutProps) {
  return (
    <Screen>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          {showLogo && (
            <View style={styles.logoContainer}>
              <AppLogo
                size={112}
                showTitle
              />
            </View>
          )}

          <View style={styles.content}>
            <AuthHeader
              title={title}
              subtitle={subtitle}
            />

            <View style={styles.formContainer}>
              {children}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },

  container: {
    flex: 1,

    paddingHorizontal: 32,
    paddingTop: 20,
    paddingBottom: 32,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 28,
  },

  content: {
    flex: 1,
  },

  formContainer: {
    marginTop: 40,
  },
});