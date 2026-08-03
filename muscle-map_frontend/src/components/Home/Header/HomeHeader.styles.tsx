import { StyleSheet } from "react-native";

import { Colors } from "@/theme/AppTheme";

const styles = StyleSheet.create({
  container: {
    height: 72,

    paddingHorizontal: 20,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: Colors.background,

    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
  },

  welcomeLabel: {
    color: Colors.textSecondary,

    fontSize: 12,
    fontWeight: "600",

    letterSpacing: 0.3,
  },

  welcomeName: {
    color: Colors.text,

    fontSize: 19,
    fontWeight: "800",

    marginTop: 1,
  },

  stat: {
    minWidth: 66,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    gap: 7,

    paddingHorizontal: 8,
    paddingVertical: 6,

    borderRadius: 18,
  },

  statText: {
    alignItems: "flex-start",
    justifyContent: "center",
  },

  statValue: {
    color: Colors.text,

    fontSize: 18,
    fontWeight: "800",

    lineHeight: 21,
  },

  statLabel: {
    color: Colors.textSecondary,

    fontSize: 9,
    fontWeight: "800",

    letterSpacing: 0.7,

    marginTop: 1,
  },

  pressed: {
    opacity: 0.65,
    transform: [{ scale: 0.96 }],
  },
});

export default styles;