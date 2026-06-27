import {
    ActivityIndicator,
    Pressable,
    StyleSheet,
    ViewStyle,
} from "react-native";

import AppText from "../AppText/AppText";

import Colors from "@/theme/Colors";
import { Radius } from "@/theme/Radius";
import { Shadows } from "@/theme/Shadows";
import { Spacing } from "@/theme/Spacing";

type Variant = "primary" | "secondary" | "outline";

interface Props {
  title: string;

  onPress?: () => void;

  variant?: Variant;

  disabled?: boolean;

  loading?: boolean;

  fullWidth?: boolean;

  style?: ViewStyle;
}

export default function AppButton({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  fullWidth = true,
  style,
}: Props) {
  const getBackground = () => {
    switch (variant) {
      case "secondary":
        return Colors.secondary;

      case "outline":
        return Colors.surface;

      default:
        return Colors.primary;
    }
  };

  const getBorder = () => {
    return variant === "outline" ? Colors.primary : "transparent";
  };

  const getTextColor = () => {
    return variant === "outline" ? Colors.primary : Colors.textInverse;
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.button,

        {
          backgroundColor: disabled ? Colors.border : getBackground(),

          borderColor: getBorder(),

          opacity: pressed ? 0.85 : 1,

          width: fullWidth ? "100%" : undefined,
        },

        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <AppText variant="button" color={getTextColor()}>
          {title}
        </AppText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,

    borderRadius: Radius.lg,

    justifyContent: "center",

    alignItems: "center",

    borderWidth: 1,

    ...Shadows.small,

    paddingHorizontal: Spacing.xl,
  },
});
