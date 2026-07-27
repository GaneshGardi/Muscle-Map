import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeHeader from "@/components/Home/Header/HomeHeader";
import CurrentWorkoutCard from "@/components/Home/Hero/CurrentWorkoutCard";
import Journey from "@/components/Home/Journey/Journey";

import { Colors } from "@/theme/AppTheme";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={styles.container}
      edges={["top"]}
    >
      {/* Header */}
      <HomeHeader />

      {/* Entire Home Scroll */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Current Workout */}
        <CurrentWorkoutCard />

        {/* Journey */}
        <Journey />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  scrollView: {
    flex: 1,
  },

  content: {
    paddingBottom: 120,
  },
});