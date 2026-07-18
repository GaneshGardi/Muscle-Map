import { useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import DayWheel from "./DayWheel";
import MonthWheel from "./MonthWheel";
import YearWheel from "./YearWheel";

export default function BirthdayPicker() {

  const [day, setDay] = useState(15);

  const [month, setMonth] = useState("January");

  const [year, setYear] = useState(2026);


  return (
    <View style={styles.container}>

      <View style={styles.row}>

        <View style={styles.wheelContainer}>
          <DayWheel
            value={day}
            onChange={setDay}
          />
        </View>


        <View style={styles.wheelContainer}>
          <MonthWheel
            value={month}
            onChange={setMonth}
          />
        </View>

        <View style={styles.wheelContainer}>
          <YearWheel
            value={year}
            onChange={setYear}
          />

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    marginTop: 30,

    alignItems: "center",

  },


  row: {
    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    gap: 10,
  },


  wheelContainer: {
    width: 120,

    height: 280,

    justifyContent: "center",
  },

});