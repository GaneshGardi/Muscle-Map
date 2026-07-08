import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../AppText/AppText";

import { Spacing } from "../../theme/Spacing";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
}

export default function AuthHeader({
  title,
  subtitle,
  align = "left",
}: AuthHeaderProps) {
  return (
    <View style={styles.container}>
      <AppText
        variant="display"
        style={[
          styles.title,
          {
            textAlign: align,
          },
        ]}
      >
        {title}
      </AppText>

      <AppText
        variant="bodySmall"
        style={[
          styles.subtitle,
          {
            textAlign: align,
          },
        ]}
      >
        {subtitle}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 0,
},

  title: {
    marginBottom: 12,

  },

  subtitle: {
    lineHeight: 30,
    width: "100%",
  },
});