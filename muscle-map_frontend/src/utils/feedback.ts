import * as Haptics from "expo-haptics";

export const feedback = {
  selection() {
    Haptics.selectionAsync();
  },

  success() {
    Haptics.notificationAsync(
      Haptics.NotificationFeedbackType.Success
    );
  },

  error() {
    Haptics.notificationAsync(
      Haptics.NotificationFeedbackType.Error
    );
  },

  warning() {
    Haptics.notificationAsync(
      Haptics.NotificationFeedbackType.Warning
    );
  },

  lightImpact() {
    Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Light
    );
  },

  mediumImpact() {
    Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Medium
    );
  },

  heavyImpact() {
    Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Heavy
    );
  },
};