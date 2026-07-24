import React from "react";
import { View, Text } from "react-native";
import { Dumbbell } from "lucide-react-native";

import styles from "./Header.styles";
import { Colors } from "@/theme/AppTheme";

export default function Greeting() {
  return (
    <View style={styles.greetingContainer}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Dumbbell size={28} color={Colors.primary} strokeWidth={2.5} />
      </View>

      {/* Greeting */}
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Good morning,</Text>

        <Text
          style={styles.userName}
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.75}
        >
          Ganesh 👋
        </Text>
      </View>
    </View>
  );
}
