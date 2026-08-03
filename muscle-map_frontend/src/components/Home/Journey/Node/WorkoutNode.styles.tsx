import { StyleSheet } from "react-native";

import { Colors } from "@/theme/AppTheme";

const NODE_SIZE = 62;
const NODE_SPACING = 96;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",

    minHeight: NODE_SPACING,

    position: "relative",

    justifyContent: "flex-start",
  },

  leftPosition: {
    alignItems: "flex-start",

    paddingLeft: 56,
  },

  rightPosition: {
    alignItems: "flex-end",

    paddingRight: 56,
  },

  nodeContainer: {
    alignItems: "center",

    width: 92,

    zIndex: 2,
  },

  circle: {
    width: NODE_SIZE,
    height: NODE_SIZE,

    borderRadius: NODE_SIZE / 2,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: Colors.surface,

    borderWidth: 2.5,
    borderColor: Colors.border,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 4,
  },

  completed: {
    backgroundColor: Colors.success,

    borderColor: Colors.success,

    shadowOpacity: 0.15,
  },

  current: {
    backgroundColor: Colors.primary,

    borderColor: Colors.primary,

    shadowOpacity: 0.2,

    elevation: 7,
  },

  rest: {
    backgroundColor: Colors.success,

    borderColor: Colors.success,
  },

  locked: {
    backgroundColor: Colors.surface,

    borderColor: Colors.border,

    shadowOpacity: 0.04,

    elevation: 1,
  },

  labelContainer: {
    alignItems: "center",

    marginTop: 6,
  },

  day: {
    color: Colors.primary,

    fontSize: 12,
    fontWeight: "900",

    lineHeight: 14,
  },

  title: {
    color: Colors.text,

    fontSize: 12,
    fontWeight: "700",

    lineHeight: 15,

    marginTop: 1,
  },

  restText: {
    color: Colors.primary,
  },

  lockedText: {
    color: Colors.textSecondary,
  },

  connector: {
    position: "absolute",

    top: NODE_SIZE / 2,

    width: 3,
    height: NODE_SPACING,

    backgroundColor: Colors.border,

    opacity: 0.75,

    zIndex: 0,
  },

  pressed: {
    transform: [{ scale: 0.94 }],

    opacity: 0.88,
  },
});

export default styles;