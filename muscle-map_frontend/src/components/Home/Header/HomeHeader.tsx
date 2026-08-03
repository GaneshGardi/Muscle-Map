import React from "react";
import { Pressable, Text, View } from "react-native";
import { Flame } from "lucide-react-native";

import { Colors } from "@/theme/AppTheme";

import styles from "./HomeHeader.styles";

interface HomeHeaderProps {
  userName?: string;
  streak?: number;
  onStreakPress?: () => void;
}

export default function HomeHeader({
  userName = "Athlete",
  streak = 16,
  onStreakPress,
}: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Welcome message */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeLabel}>Welcome</Text>
        <Text style={styles.welcomeName} numberOfLines={1}>
          {userName}
        </Text>
      </View>

      {/* Streak */}
      <Pressable
        onPress={onStreakPress}
        style={({ pressed }) => [
          styles.stat,
          pressed && styles.pressed,
        ]}
      >
        <Flame
          size={25}
          color={Colors.primary}
          strokeWidth={2.6}
          fill={Colors.primary}
        />

        <View style={styles.statText}>
          <Text style={styles.statValue}>{streak}</Text>
          <Text style={styles.statLabel}>DAY</Text>
        </View>
      </Pressable>
    </View>
  );
}