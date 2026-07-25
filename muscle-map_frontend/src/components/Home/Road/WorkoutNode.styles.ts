import { StyleSheet } from "react-native";

import { Colors, Shadows, Typography } from "@/theme/AppTheme";

export default StyleSheet.create({
  container: {
    width: 72,

    alignItems: "center",
  },

  circle: {
    width: 60,
    height: 60,

    borderRadius: 30,

    justifyContent: "center",
    alignItems: "center",

    ...Shadows.md,
  },

  completed: {
    backgroundColor: Colors.primary,
  },

  current: {
    backgroundColor: "#FF8A3D",

    borderWidth: 4,

    borderColor: "#FFE2CF",
  },

  locked: {
    backgroundColor: "#F3F4F6",

    borderWidth: 1,

    borderColor: "#E5E7EB",

    shadowOpacity: 0,

    elevation: 0,
  },

  rest: {
    backgroundColor: "#32C36C",
  },

  title: {
    marginTop: 8,

    ...Typography.body,
    fontWeight: "600",

    color: Colors.text,

    textAlign: "center",
  },

  lockedText: {
    color: Colors.textSecondary,
  },
});
