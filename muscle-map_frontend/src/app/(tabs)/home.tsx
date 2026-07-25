import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeHeader from "@/components/Home/Header/HomeHeader";
import WeekHero from "@/components/Home/Hero/WeekHero";

import { Colors, Spacing } from "@/theme/AppTheme";

export default function HomeScreen() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={styles.container}
    >
      <HomeHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <WeekHero
          week={1}
          workoutName="Push Day"
          muscleGroups="Chest • Shoulders • Triceps"
          progress={40}
          completed={2}
          total={5}
        />

        {/* RoadMap comes here later */}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.background,
  },

  content: {
    paddingBottom: 140,

    gap: Spacing.xl,
  },
});