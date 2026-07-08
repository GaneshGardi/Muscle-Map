import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../AppText/AppText";

import Colors from "../../theme/Colors";
import { Radius } from "../../theme/Radius";

type MessageType = "success" | "warning" | "error";

interface AppFormMessageProps {
  type: MessageType;
  message?: string;
}

export default function AppFormMessage({
  type,
  message,
}: AppFormMessageProps) {

  if (!message) return null;

  const config = {
    success: {
      icon: "checkmark-circle",
      color: Colors.success,
      background: Colors.successBackground,
      border: Colors.successBorder,
    },

    warning: {
      icon: "warning",
      color: Colors.warning,
      background: Colors.warningBackground,
      border: Colors.warningBorder,
    },

    error: {
      icon: "alert-circle",
      color: Colors.error,
      background: Colors.errorBackground,
      border: Colors.errorBorder,
    },
  };

  const current = config[type];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: current.background,
          borderColor: current.border,
        },
      ]}
    >
      <Ionicons
        name={current.icon as any}
        size={20}
        color={current.color}
      />

      <AppText
        variant="bodySmall"
        color={current.color}
        style={styles.message}
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

    borderWidth: 1,
    borderRadius: Radius.md,

    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  message: {
    flex: 1,
    marginLeft: 10,
  },
});