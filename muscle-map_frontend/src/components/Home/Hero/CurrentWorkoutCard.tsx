import React from "react";
import { View, Text } from "react-native";

import HeroButton from "./HeroButton";
import ProgressRing from "./ProgessRing";

import styles from "./Hero.styles";

export default function CurrentWorkoutCard() {
  return (
    <View style={styles.card}>

      <View style={styles.leftSection}>
        <Text style={styles.week}>
          WEEK 3
        </Text>

        <Text style={styles.title}>
          Push Day
        </Text>

        <Text style={styles.subtitle}>
          Chest • Shoulders • Triceps
        </Text>

        <HeroButton />
      </View>

      <View style={styles.rightSection}>
        <ProgressRing
          progress={40}
          completed={2}
          total={5}
        />
      </View>

    </View>
  );
}