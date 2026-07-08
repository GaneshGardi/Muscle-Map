import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../AppText/AppText";

import Colors from "../../theme/Colors";
import { Spacing } from "../../theme/Spacing";

interface AppLogoProps {
  size?: number;
  showTitle?: boolean;
  showTagline?: boolean;
}

export default function AppLogo({
  size = 100,
  showTitle,
  showTagline = false,
}: AppLogoProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logos/logo-full.png")}
        style={{
          width: size,
          height: size,
        }}
        resizeMode="contain"
      />

      {showTitle && (
        <AppText
          variant="logo"
          style={styles.title}
        >
          Muscle Map
        </AppText>
      )}

      {showTagline && (
        <AppText
          variant="bodySmall"
          color={Colors.textSecondary}
          style={styles.tagline}
        >
          Build • Track • Improve
        </AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    marginTop: 6,
    textAlign: "center",
  },

  tagline: {
    marginTop: 4,
    textAlign: "center",
    color: Colors.textSecondary,
  },
});