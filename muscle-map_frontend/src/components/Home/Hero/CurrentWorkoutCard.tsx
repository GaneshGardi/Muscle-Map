import React from "react";
import { Text, View } from "react-native";
import { Flag } from "lucide-react-native";

import { Colors } from "@/theme/AppTheme";

import styles from "./CurrentWorkoutCard.styles";

interface CurrentWorkoutCardProps {
  weekNumber: number;
  title: string;
}

export default function CurrentWorkoutCard({
  weekNumber,
  title,
}: CurrentWorkoutCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.eyebrowRow}>
        <Flag
          size={13}
          color={Colors.surface}
          strokeWidth={2.8}
          fill={Colors.surface}
        />

        <Text style={styles.eyebrow}>WEEK {weekNumber}</Text>
      </View>

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}