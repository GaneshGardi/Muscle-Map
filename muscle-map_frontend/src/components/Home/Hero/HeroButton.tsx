import React from "react";
import { Pressable, Text, View } from "react-native";
import { ArrowRight } from "lucide-react-native";

import styles from "./WeekHero.styles";
import { Colors } from "@/theme/AppTheme";

interface HeroButtonProps {
  title: string;
  onPress?: () => void;
}

export default function HeroButton({
  title,
  onPress,
}: HeroButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.heroButton,
        pressed && { opacity: 0.9 },
      ]}
    >
      <Text style={styles.heroButtonText}>
        {title}
      </Text>

      <View style={styles.heroArrowCircle}>
        <ArrowRight
          size={18}
          color={Colors.primary}
          strokeWidth={2.6}
        />
      </View>
    </Pressable>
  );
}