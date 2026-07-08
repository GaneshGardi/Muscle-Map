import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  Pressable,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import AppText from "../AppText/AppText";

import Colors from "../../theme/Colors";
import { Radius } from "../../theme/Radius";
import { Spacing } from "../../theme/Spacing";


interface Props extends TextInputProps {
  label?: string;
  error?: string;

  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
}

export default function AppInput({
  label,
  error,
  leftIcon,
  rightIcon,
  secureTextEntry,
  style,
  ...rest
}: Props) {
  const [hidden, setHidden] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && (
        <AppText variant="label" style={styles.label}>
          {label}
        </AppText>
      )}

      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focusedBorder,
          error && styles.errorBorder,
        ]}
      >
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20

            }
            color={
              isFocused
                ? Colors.primary
                : Colors.textSecondary
            }
            style={styles.icon}
          />
        )}

        <TextInput
          {...rest}
          secureTextEntry={hidden}
          style={[styles.input, style]}
          placeholderTextColor={Colors.placeholder}
          cursorColor={Colors.primary}
          selectionColor={Colors.primary}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {secureTextEntry && (
          <Pressable onPress={() => setHidden(!hidden)}>
            <Ionicons
              name={
                hidden
                  ? "eye-off-outline"
                  : "eye-outline"
              }
              size={20}
              color={
                isFocused
                  ? Colors.primary
                  : Colors.textSecondary
              }
            />
          </Pressable>
        )}

        {!secureTextEntry && rightIcon && (
          <Ionicons
            name={rightIcon}
            size={20}
            color={
              isFocused
                ? Colors.primary
                : Colors.textSecondary
            }
          />
        )}
      </View>

      {error && (
        <AppText
          variant="caption"
          color={Colors.error}
          style={styles.error}
        >
          {error}
        </AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  label: {
    marginBottom: Spacing.sm,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 18,
    height:54,
  },

  input: {
    flex: 1,
    marginHorizontal: Spacing.md,
  },

  icon: {
    marginRight: Spacing.xs,
  },

  error: {
    marginTop: Spacing.xs,
  },

  errorBorder: {
    borderColor: Colors.error,
  },

  focusedBorder: {
    borderColor: Colors.primary,
  },
});