import React from "react";
import { Pressable, Text, View } from "react-native";

import { ArrowRight } from "lucide-react-native";

import { Colors } from "@/theme/AppTheme";

import styles from "./Hero.styles";

interface HeroButtonProps {
  onPress?: () => void;
}

export default function HeroButton({
  onPress,
}: HeroButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && {
          transform: [{ scale: 0.97 }],
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        Start Workout
      </Text>

      <View style={styles.buttonCircle}>
        <ArrowRight
          size={22}
          color={Colors.primary}
          strokeWidth={3}
        />
      </View>
    </Pressable>
  );
}