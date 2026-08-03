import { StyleSheet } from "react-native";

import { Colors } from "@/theme/AppTheme";

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: 14,

    paddingHorizontal: 18,
    paddingVertical: 14,

    borderRadius: 20,

    backgroundColor: Colors.primary,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,

    elevation: 4,
  },

  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },

  textContent: {
    flex: 1,
  },

  label: {
    color: "rgba(255,255,255,0.85)",

    fontSize: 11,
    fontWeight: "800",

    letterSpacing: 0.8,

    marginBottom: 3,
  },

  title: {
    color: Colors.surface,

    fontSize: 19,
    fontWeight: "800",
  },

  arrowContainer: {
    width: 34,
    height: 34,

    borderRadius: 17,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "rgba(255,255,255,0.18)",

    marginLeft: 12,
  },
});

export default styles;