import { StyleSheet } from "react-native";

import { Colors } from "@/theme/AppTheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.background,
  },

  content: {
    paddingTop: 8,

    paddingBottom: 120,
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