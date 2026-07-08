import React from "react";
import {
  Pressable,
  StyleSheet,
  View,
} from "react-native";

import AppText from "../AppText/AppText";

import Colors from "../../theme/Colors";

interface AuthFooterProps {
  question: string;
  action: string;
  onPress: () => void;
}

export default function AuthFooter({
  question,
  action,
  onPress,
}: AuthFooterProps) {
  return (
    <View style={styles.container}>
      <AppText
        variant="bodySmall"
        color={Colors.textSecondary}
      >
        {question}
      </AppText>

      <Pressable onPress={onPress}>
        {({ pressed }) => (
          <AppText
            variant="bodyMedium"
            color={pressed ? Colors.secondary : Colors.primary}
            style={styles.action}
          >
            {action}
          </AppText>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  action: {
    marginTop: 2,
  },
});