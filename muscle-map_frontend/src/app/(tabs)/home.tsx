import React from "react";
import { StyleSheet, View } from "react-native";
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
      {/* Fixed top section */}
      <HomeHeader />



      {/* Journey */}
      <View style={styles.journey}>
        <Journey />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.background,
  },

  hero: {
    paddingTop: 4,
    paddingBottom: 8,
  },

  journey: {
    flex: 1,

    marginTop: 4,
  },
});