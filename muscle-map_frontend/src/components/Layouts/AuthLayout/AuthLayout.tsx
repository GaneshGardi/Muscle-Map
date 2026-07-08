import React from "react";
import { StyleSheet, View } from "react-native";

import Screen from "../../Screen/Screen";
import AppLogo from "../../AppLogo/AppLogo";
import AuthHeader from "../../AuthHeader/AuthHeader";

interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  showLogo?: boolean;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
  footer,
  showLogo = true,
}: Props) {
  return (
    <Screen>
      <View style={styles.container}>
        {showLogo && (
          <View style={styles.logo}>
            <AppLogo
              size={100}
              showTitle
            />
          </View>
        )}

        <AuthHeader
          title={title}
          subtitle={subtitle}
        />

        <View style={styles.form}>
          {children}
        </View>

        {footer && (
          <View style={styles.footer}>
            {footer}
          </View>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 20,
  },

  logo: {
    alignItems: "center",
    marginBottom: 24,
  },

  form: {
    flex: 1,
    marginTop: 32,
  },

  footer: {
    paddingTop: 28,
  },
});