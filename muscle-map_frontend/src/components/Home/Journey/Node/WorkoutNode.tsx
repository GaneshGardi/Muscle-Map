import { Check, Dumbbell, Leaf, Lock } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

import { Colors } from "@/theme/AppTheme";

import type {
  WorkoutData
} from "@/components/Home/Data/journeyData";

import styles from "./WorkoutNode.styles";

interface WorkoutNodeProps {
  workout: WorkoutData;
  position: number;
  isLast?: boolean;
  onPress?: () => void;
}

export default function WorkoutNode({
  workout,
  position,
  isLast = false,
  onPress,
}: WorkoutNodeProps) {
  const { day, title, state } = workout;

  const isLocked = state === "locked";
  const isCompleted = state === "completed";
  const isCurrent = state === "current";
  const isRest = state === "rest";

  const renderIcon = () => {
    switch (state) {
      case "completed":
        return <Check size={28} color={Colors.surface} strokeWidth={3.2} />;

      case "current":
        return <Dumbbell size={27} color={Colors.surface} strokeWidth={2.7} />;

      case "rest":
        return <Leaf size={27} color={Colors.surface} strokeWidth={2.6} />;

      case "locked":
      default:
        return (
          <Lock size={25} color={Colors.textSecondary} strokeWidth={2.6} />
        );
    }
  };

  return (
    <View
      style={[
        styles.wrapper,
        position % 2 === 0 ? styles.leftPosition : styles.rightPosition,
      ]}
    >
      <Pressable
        disabled={isLocked}
        onPress={onPress}
        style={({ pressed }) => [
          styles.nodeContainer,
          pressed && !isLocked && styles.pressed,
        ]}
      >
        <View
          style={[
            styles.circle,

            isCompleted && styles.completed,

            isCurrent && styles.current,

            isRest && styles.rest,

            isLocked && styles.locked,
          ]}
        >
          {renderIcon()}
        </View>

        <View style={styles.labelContainer}>
          <Text
            style={[
              styles.day,
              isLocked && styles.lockedText,
              isRest && styles.restText,
            ]}
          >
            D{day}
          </Text>

          <Text style={[styles.title, isLocked && styles.lockedText]}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
