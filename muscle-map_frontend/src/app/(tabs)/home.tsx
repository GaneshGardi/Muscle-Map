import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeHeader from "@/components/Home/Header/HomeHeader";
import WeekHero from "@/components/Home/Hero/WeekHero";

import { Colors, Spacing } from "@/theme/AppTheme";
import WorkoutNode from "@/components/Home/Road/WorkoutNode";
import { View } from "react-native";

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

  <View
    style={{
      marginTop: 40,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
      paddingHorizontal: 20,
    }}
  >
    <WorkoutNode
      day={1}
      title="Push"
      state="completed"
    />

    <WorkoutNode
      day={2}
      title="Pull"
      state="current"
    />

    <WorkoutNode
      day={3}
      title="Legs"
      state="locked"
    />

    <WorkoutNode
      day={4}
      title="Rest"
      state="rest"
    />
  </View>
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