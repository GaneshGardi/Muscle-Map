import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "@/theme/AppTheme/Colors";
import Layout from "@/theme/AppTheme/Layout";

interface Props {
  children: React.ReactNode;

  scroll?: boolean;

  style?: any;

  contentContainerStyle?: any;
}

export default function Screen({
  children,
  scroll = false,
  style,
  contentContainerStyle,
}: Props) {
  if (scroll) {
    return (
      <SafeAreaView style={[styles.safeArea, style]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
        >
          <View style={styles.container}>{children}</View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  scrollContent: {
    paddingBottom: Layout.bottomBarHeight + 24,
  },

  container: {
    width: "100%",
    alignSelf: "center",
    maxWidth: Layout.maxContentWidth,
  },
});
