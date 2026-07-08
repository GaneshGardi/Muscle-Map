import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../AppText/AppText";

import Colors from "../../theme/Colors";
import { Radius } from "../../theme/Radius";
import { Spacing } from "../../theme/Spacing";

interface AppFormErrorProps {
  message?: string;
}

export default function AppFormError({
  message,
}: AppFormErrorProps) {

  if (!message) return null;

  return (
    <View style={styles.container}>
      <Ionicons
        name="alert-circle"
        size={20}
        color={Colors.error}
      />

      <AppText
        variant="bodySmall"
        color={Colors.error}
        style={styles.text}
      >
        {message}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: Colors.errorBackground,

    borderWidth: 1,
    borderColor: "#FFD6D6",

    borderRadius: Radius.md,

    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  text: {
    flex: 1,
    marginLeft: 10,
  },
});