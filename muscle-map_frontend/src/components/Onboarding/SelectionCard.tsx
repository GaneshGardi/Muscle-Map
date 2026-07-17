import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import AppCard from "../AppCard/AppCard";
import AppText from "../AppText/AppText";

import Colors from "@/theme/Colors";
import { Spacing } from "@/theme/Spacing";

interface Props {
  title: string;

  subtitle?: string;

  icon: keyof typeof Ionicons.glyphMap;

  selected: boolean;

  onPress: () => void;
}

export default function SelectionCard({
  title,
  subtitle,
  icon,
  selected,
  onPress,
}: Props) {
  return (
    <AppCard
      selected={selected}
      onPress={onPress}
    >
      <View style={styles.row}>

        <View
          style={[
            styles.iconContainer,

            selected && styles.iconSelected,
          ]}
        >
          <Ionicons
            name={icon}
            size={28}
            color={
              selected
                ? Colors.textInverse
                : Colors.primary
            }
          />
        </View>

        <View style={styles.textContainer}>
          <AppText variant="h2">
            {title}
          </AppText>

          {subtitle ? (
            <AppText
              variant="body"
              color={Colors.textSecondary}
              style={styles.subtitle}
            >
              {subtitle}
            </AppText>
          ) : null}
        </View>

      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",

    alignItems: "center",
  },

  iconContainer: {
    width: 60,
    height: 60,

    borderRadius: 18,

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: Colors.surfaceAlt,
  },

  iconSelected: {
    backgroundColor: Colors.primary,
  },

  textContainer: {
    flex: 1,

    marginLeft: Spacing.lg,
  },

  subtitle: {
    marginTop: 4,
  },
});