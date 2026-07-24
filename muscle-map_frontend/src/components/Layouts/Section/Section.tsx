import React from "react";
import { View, StyleSheet } from "react-native";

import Layout from "@/theme/AppTheme/Layout";
import Spacing from "@/theme/AppTheme/Spacing";

interface Props {
  children: React.ReactNode;
}

export default function Section({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Layout.screenPadding,
    marginBottom: Spacing.section,
  },
});