import React from "react";
import { View, Text } from "react-native";

import Svg, {
  Circle,
} from "react-native-svg";

import { Colors } from "@/theme/AppTheme";

import styles from "./Hero.styles";

interface ProgressRingProps {
  progress: number;

  completed: number;

  total: number;
}

const SIZE = 108;
const STROKE = 10;

const RADIUS = (SIZE - STROKE) / 2;

const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ProgressRing({
  progress,
  completed,
  total,
}: ProgressRingProps) {
  const offset =
    CIRCUMFERENCE -
    (progress / 100) * CIRCUMFERENCE;

  return (
    <View style={styles.progressContainer}>
      <Svg
        width={SIZE}
        height={SIZE}
      >
        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="#ECECEC"
          strokeWidth={STROKE}
          fill="none"
        />

        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke={Colors.primary}
          strokeWidth={STROKE}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          rotation="-90"
          origin={`${SIZE / 2}, ${SIZE / 2}`}
        />
      </Svg>

      <View style={styles.progressCenter}>
        <Text style={styles.progressPercentage}>
          {progress}%
        </Text>

        <Text style={styles.progressFraction}>
          {completed}/{total}
        </Text>
      </View>
    </View>
  );
}