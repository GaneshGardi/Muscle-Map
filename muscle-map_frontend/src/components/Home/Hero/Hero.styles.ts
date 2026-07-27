import { StyleSheet } from "react-native";

import { Colors } from "@/theme/AppTheme";

export default StyleSheet.create({

  card: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginHorizontal: 20,

    marginTop: 18,

    paddingHorizontal: 22,

    paddingVertical: 22,

    borderRadius: 28,

    backgroundColor: Colors.surface,

    shadowColor: "#000",

    shadowOpacity: 0.12,

    shadowRadius: 16,

    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 10,
  },

  leftSection: {
    flex: 1,
    paddingRight: 18,
  },

  rightSection: {
    justifyContent: "center",
    alignItems: "center",
  },

  week: {
    color: Colors.primary,

    fontSize: 14,

    fontWeight: "700",

    letterSpacing: 1.4,

  },

  title: {
    fontSize: 40,

    fontWeight: "800",

    color: Colors.text,

    marginBottom: 2,
  },

  subtitle: {
    fontSize: 17,

    color: Colors.textSecondary,

    marginBottom: 10,

    lineHeight: 24,
  },

  button: {
    height: 50,

    borderRadius: 18,

    backgroundColor: Colors.primary,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    paddingLeft: 22,

    paddingRight:  22,
  },

  buttonText: {
    color: Colors.surface,

    fontSize: 21,

    fontWeight: "700",
  },

  buttonCircle: {
    width: 40,

    height: 40,

    borderRadius: 23,

    backgroundColor: Colors.surface,

    justifyContent: "center",


    alignItems: "center",
  },

  progressContainer: {
  width: 110,

  height: 110,

  justifyContent: "center",

  alignItems: "center",
},

progressCenter: {
  position: "absolute",

  justifyContent: "center",

  alignItems: "center",
},

progressPercentage: {
  fontSize: 28,

  fontWeight: "800",

  color: Colors.text,
},

progressFraction: {
  marginTop: 4,

  fontSize: 14,

  fontWeight: "600",

  color: Colors.textSecondary,
},

});