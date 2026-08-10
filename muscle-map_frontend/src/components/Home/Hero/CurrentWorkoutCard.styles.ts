import { StyleSheet } from "react-native";

import { Colors } from "@/theme/AppTheme";

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 16,


    backgroundColor: Colors.primary,

    borderRadius: 22,

    marginHorizontal: 10, 

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,

    elevation: 6,
  },

  eyebrowRow: {
    flexDirection: "row",
    alignItems: "center",

    gap: 6,

    marginBottom: 4,
  },

  eyebrow: {
    color: "rgba(255,255,255,0.85)",

    fontSize: 12,
    fontWeight: "800",

    letterSpacing: 1,
  },

  title: {
    color: Colors.surface,

    fontSize: 20,
    fontWeight: "800",
  },
});

export default styles;
