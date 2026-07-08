import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../AppText/AppText";

import Colors from "../../theme/Colors";
import { Spacing } from "../../theme/Spacing";

interface DividerProps {
  text?: string;
}

export default function Divider({
  text = "OR",
}: DividerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />

      <AppText
        variant="bodySmall"
        style={styles.text}
      >
        {text}
      </AppText>

      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 24,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
  },

  text: {
    marginHorizontal: Spacing.md,
    color: Colors.textSecondary,
  },
});