import { StyleSheet } from "react-native";

import { Colors } from "@/theme/AppTheme";

export const NODE_SIZE = 57;
export const NODE_SPACING = 62;
export const SIDE_PADDING = 87;
export const NODE_CONTAINER_WIDTH = 90;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",

    minHeight: NODE_SPACING,

    position: "relative",

    justifyContent: "flex-start",
  },

  leftPosition: {
    alignItems: "flex-start",

    paddingLeft: SIDE_PADDING,
  },

  rightPosition: {
    alignItems: "flex-end",

    paddingRight: SIDE_PADDING,
  },

  nodeContainer: {
    alignItems: "center",

    width: NODE_CONTAINER_WIDTH,

    zIndex: 2,
  },

  circle: {
    width: NODE_SIZE,
    height: NODE_SIZE,

    borderRadius: NODE_SIZE / 2,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: Colors.surface,

    borderWidth: 2,
    borderColor: Colors.border,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    elevation: 3,
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
    elevation: 6,
  },

  rest: {
    backgroundColor: Colors.success,
    borderColor: Colors.success,
  },

  locked: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    shadowOpacity: 0.03,
    elevation: 1,
  },

  labelContainer: {
    alignItems: "center",
    marginTop: 5,
  },

  day: {
    color: Colors.primary,
    fontSize: 11,
    fontWeight: "900",
    lineHeight: 13,
  },

  title: {
    color: Colors.text,
    fontSize: 11,
    fontWeight: "700",
    lineHeight: 14,
    marginTop: 1,
  },

  restText: {
    color: Colors.primary,
  },

  lockedText: {
    color: Colors.textSecondary,
  },

  pressed: {
    transform: [{ scale: 0.94 }],
    opacity: 0.88,
  },
});

export default styles;
