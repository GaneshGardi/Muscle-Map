import { StyleSheet } from "react-native";

import { Colors } from "@/theme/AppTheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.background,
  },

  bannerWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,

    zIndex: 10,

  },

  content: {
    paddingTop: 98,

    paddingBottom: 10,
  },

  weekBridge: {
    width: 3,
    height: 28,

    alignSelf: "center",

    backgroundColor: Colors.border,

    opacity: 0.75,
  },
});

export default styles;