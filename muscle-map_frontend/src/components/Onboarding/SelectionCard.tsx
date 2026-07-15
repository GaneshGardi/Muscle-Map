import React, { useEffect, useRef } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../AppText/AppText";

import Colors from "@/theme/Colors";
import { Radius } from "@/theme/Radius";
import { Shadows } from "@/theme/Shadows";
import { Spacing } from "@/theme/Spacing";

interface Props {
  title: string;
  subtitle?: string;

  icon?: keyof typeof Ionicons.glyphMap;

  selected?: boolean;

  onPress?: () => void;
}

export default function SelectionCard({
  title,
  subtitle,
  icon,
  selected = false,
  onPress,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: selected ? 1.02 : 1,
      friction: 7,
      tension: 120,
      useNativeDriver: true,
    }).start();
  }, [selected]);

  async function handlePress() {
    await Haptics.selectionAsync();
    onPress?.();
  }

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          transform: [{ scale }],
        },
      ]}
    >
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.card,

          selected && styles.selectedCard,

          pressed && styles.pressed,
        ]}
      >
        {/* LEFT SIDE */}

        <View style={styles.leftSection}>
          {icon && (
            <View
              style={[
                styles.iconContainer,
                selected && styles.selectedIconContainer,
              ]}
            >
              <Ionicons
                name={icon}
                size={28}
                color={
                  selected
                    ? Colors.primary
                    : Colors.primary
                }
              />
            </View>
          )}

          <View style={styles.textContainer}>
            <AppText
              variant="bodyMedium"
              color={
                selected
                  ? Colors.textInverse
                  : Colors.text
              }
            >
              {title}
            </AppText>

            {subtitle && (
              <AppText
                variant="caption"
                color={
                  selected
                    ? "rgba(255,255,255,0.85)"
                    : Colors.textSecondary
                }
                style={styles.subtitle}
              >
                {subtitle}
              </AppText>
            )}
          </View>
        </View>

        {/* RIGHT CHECK */}

        <Ionicons
          name={
            selected
              ? "checkmark-circle"
              : "ellipse-outline"
          }
          size={24}
          color={
            selected
              ? Colors.textInverse
              : Colors.textMuted
          }
        />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Spacing.md,
  },

  card: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    paddingVertical: 18,

    paddingHorizontal: 18,

    backgroundColor: Colors.surface,

    borderRadius: Radius.lg,

    ...Shadows.small,
  },

  selectedCard: {
    backgroundColor: Colors.primary,

    ...Shadows.medium,
  },

  pressed: {
    opacity: 0.95,
  },

  leftSection: {
    flexDirection: "row",

    alignItems: "center",

    flex: 1,
  },

  iconContainer: {
    width: 54,
    height: 54,

    borderRadius: 27,

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: Colors.surfaceAlt,
  },

  selectedIconContainer: {
    backgroundColor: Colors.surface,
  },

  textContainer: {
    marginLeft: Spacing.md,

    flex: 1,
  },

  subtitle: {
    marginTop: 4,
  },
});