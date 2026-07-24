import { StyleSheet } from "react-native";

import {
  Colors,
  Layout,
  Spacing,
} from "@/theme/AppTheme";

export default StyleSheet.create({
  container: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    paddingHorizontal: Layout.screenHorizontalPadding,

    paddingTop: Spacing.md,

    paddingBottom: Spacing.md,
  },


  greetingContainer: {
  flex: 1,

  flexDirection: "row",

  alignItems: "center",
},

logoContainer: {
  width: 52,
  height: 52,

  borderRadius: 30,

  backgroundColor: Colors.surface,

  justifyContent: "center",
  alignItems: "center",

  marginRight: 16,
},

textContainer: {
  flex: 1,

  justifyContent: "center",
},

greetingText: {
  fontSize: 15,

  fontWeight: "400",

  color: Colors.textSecondary,

  letterSpacing: 0.2,
},

userName: {
  marginTop: -2,

  fontSize: 26,

  fontWeight: "800",

  color: Colors.text,

  lineHeight: 36,

  includeFontPadding: false,
},

subtitle: {
  marginTop: 2,

  fontSize: 15,

  color: Colors.textSecondary,
},

// ----------------------------
// Streak
// ----------------------------

streakContainer: {
  alignItems: "center",
  justifyContent: "center",

  marginLeft: 12,

  minWidth: 68,
},

streakRow: {
  flexDirection: "row",
  alignItems: "center",
},

fire: {
  fontSize: 18,

  marginRight: 2,
},

streakNumber: {
  fontSize: 28,

  fontWeight: "800",

  color: Colors.text,

  lineHeight: 30,
},

streakLabel: {
  marginTop: 2,

  fontSize: 12,

  fontWeight: "600",

  color: Colors.textSecondary,
},
});