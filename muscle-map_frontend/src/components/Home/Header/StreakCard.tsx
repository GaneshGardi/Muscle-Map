import React from "react";
import { View, Text } from "react-native";

import styles from "./Header.styles";

export default function StreakCard() {
  return (
    <View style={styles.streakContainer}>
      <View style={styles.streakRow}>
        <Text style={styles.fire}>🔥</Text>

        <Text style={styles.streakNumber}>16</Text>
      </View>

      <Text style={styles.streakLabel}>
        Day Streak
      </Text>
    </View>
  );
}