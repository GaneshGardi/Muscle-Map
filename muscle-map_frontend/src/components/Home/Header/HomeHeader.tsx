import React from "react";
import { View } from "react-native";

import Greeting from "./Greeting";
import StreakCard from "./StreakCard";
import styles from "./Header.styles";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <Greeting />

      <StreakCard />
    </View>
  );
}