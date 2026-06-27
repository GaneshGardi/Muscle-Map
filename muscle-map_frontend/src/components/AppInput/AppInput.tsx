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

import Colors from "@/theme/Colors";
import { Radius } from "@/theme/Radius";
import { Spacing } from "@/theme/Spacing";

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

  return (
    <View style={styles.container}>

      {label && (
        <AppText
          variant="label"
          style={styles.label}
        >
          {label}
        </AppText>
      )}

      <View
        style={[
          styles.inputContainer,
          error && styles.errorBorder,
        ]}
      >

        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            color={Colors.textSecondary}
            style={styles.icon}
          />
        )}

        <TextInput
          {...rest}
          secureTextEntry={hidden}
          placeholderTextColor={Colors.placeholder}
          style={[styles.input, style]}
        />

        {secureTextEntry && (
          <Pressable
            onPress={() => setHidden(!hidden)}
          >
            <Ionicons
              name={
                hidden
                  ? "eye-off-outline"
                  : "eye-outline"
              }
              size={20}
              color={Colors.textSecondary}
            />
          </Pressable>
        )}

        {!secureTextEntry && rightIcon && (
          <Ionicons
            name={rightIcon}
            size={20}
            color={Colors.textSecondary}
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

    borderRadius: Radius.lg,

    borderWidth: 1,

    borderColor: Colors.border,

    paddingHorizontal: Spacing.lg,

    height: 58,

  },

  input: {

    flex: 1,

    marginHorizontal: Spacing.md,

  },

  icon: {

    marginRight: 2,

  },

  error: {

    marginTop: 6,

  },

  errorBorder: {

    borderColor: Colors.error,

  },

});