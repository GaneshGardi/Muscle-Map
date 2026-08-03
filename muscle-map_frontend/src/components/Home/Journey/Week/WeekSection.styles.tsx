import { StyleSheet } from "react-native";

import { Colors } from "@/theme/AppTheme";

const styles = StyleSheet.create({
  container: {
    width: "100%",

    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },

  header: {
    width: "100%",

    paddingHorizontal: 4,
    marginBottom: 26,
  },

  eyebrowRow: {
    flexDirection: "row",
    alignItems: "center",

    gap: 6,

    marginBottom: 6,
  },

  flagIcon: {
    marginBottom: 1,
  },

  eyebrow: {
    color: Colors.textSecondary,

    fontSize: 14,
    fontWeight: "800",

    letterSpacing: 1.2,
  },

  eyebrowCurrent: {
    color: Colors.primary,
  },

  title: {
    color: Colors.text,

    fontSize: 28,
    fontWeight: "900",

    lineHeight: 34,
  },

  titleCurrent: {
    color: Colors.text,
  },

  subtitle: {
    color: Colors.textSecondary,

    fontSize: 15,
    fontWeight: "500",

    lineHeight: 21,

    marginTop: 5,
  },

  path: {
    width: "100%",

    alignItems: "center",
  },
});

export default styles;