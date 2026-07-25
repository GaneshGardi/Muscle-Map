import { StyleSheet } from "react-native";

import {
  Colors,
  Radius,
  Shadows,
  Spacing,
  Typography,
} from "@/theme/AppTheme";

export default StyleSheet.create({
  container: {
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.xs,

    padding: Spacing.md,

    backgroundColor: Colors.surface,

    borderRadius: Radius.lg,
    overflow: "hidden",
    ...Shadows.md,
  },

  // -------------------------
  // Layout
  // -------------------------

  contentRow: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "flex-start",
  },

  leftColumn: {
    flex: 1,

    paddingRight: 16,
  },

  rightColumn: {
    width: 110,

    alignItems: "center",

    justifyContent: "flex-start",
  },

  // -------------------------
  // Text
  // -------------------------

  week: {
    ...Typography.caption,

    color: Colors.primary,

    fontWeight: "700",

    letterSpacing: 1,

    textTransform: "uppercase",
  },

  title: {
    marginTop: 4,

    ...Typography.h2,

    color: Colors.text,
  },

  subtitle: {
    marginTop: 4,

    ...Typography.body,

    color: Colors.textSecondary,
  },

  // -------------------------
  // Hero Button
  // -------------------------

  heroButton: {
    marginTop: 18,

    width: 207,

    height: 54,

    alignSelf: "flex-start",

    borderRadius: Radius.lg,

    backgroundColor: Colors.primary,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    paddingHorizontal: 18,

    ...Shadows.sm,
  },

  heroButtonText: {
    color: Colors.surface,

    fontSize: 18,

    fontWeight: "700",
  },

  heroArrowCircle: {
    width: 36,

    height: 36,

    borderRadius: 18,

    backgroundColor: Colors.surface,

    justifyContent: "center",

    alignItems: "center",
  },

  // -------------------------
  // Progress
  // -------------------------

  progressContainer: {
    width: 100,
    
    alignItems: "center",

    justifyContent: "center",

    marginTop: 16,
  },

  progressRing: {
    width: 110,

    height: 110,

    borderRadius: 55,

    borderWidth: 8,

    borderColor: "#ECECEC",

    justifyContent: "center",

    alignItems: "center",
  },

  progressCenter: {
    alignItems: "center",

    justifyContent: "center",
  },

  progressPercentage: {
    fontSize: 30,

    fontWeight: "800",

    color: Colors.text,
  },

  progressFraction: {
    marginTop: 2,

    fontSize: 13,

    fontWeight: "600",

    color: Colors.textSecondary,
  },

  progressLabel: {
    marginTop: 2,

    fontSize: 12,

    color: Colors.textSecondary,
  },
});