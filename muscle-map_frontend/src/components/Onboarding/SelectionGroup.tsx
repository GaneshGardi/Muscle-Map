import React from "react";
import { StyleSheet, View } from "react-native";

import SelectionCard from "./SelectionCard";
import { Spacing } from "@/theme/Spacing";

interface Option {
  label: string;
  value: string;
  subtitle?: string;
  icon?: any;
}

interface Props {
  options: Option[];

  selectedValue?: string;

  onSelect: (value: string) => void;

  layout?: "vertical" | "grid";
}

export default function SelectionGroup({
  options,
  selectedValue,
  onSelect,
  layout = "vertical",
}: Props) {
  return (
    <View
      style={[
        styles.container,
        layout === "grid" && styles.gridContainer,
      ]}
    >
      {options.map((option) => (
        <View
          key={option.value}
          style={[
            layout === "grid" && styles.gridItem,
          ]}
        >
          <SelectionCard
            title={option.label}
            subtitle={option.subtitle}
            icon={option.icon}
            selected={selectedValue === option.value}
            onPress={() => onSelect(option.value)}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: Spacing.md,
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  gridItem: {
    width: "48%",
  },
});