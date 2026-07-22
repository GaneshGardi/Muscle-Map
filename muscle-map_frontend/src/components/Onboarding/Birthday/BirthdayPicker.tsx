import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import DayWheel from "./DayWheel";
import MonthWheel from "./MonthWheel";
import YearWheel from "./YearWheel";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface Props {
  value?: string;
  onChange?: (birthDate: string) => void;
}

export default function BirthdayPicker({ value, onChange }: Props) {
  const [day, setDay] = useState(15);

  const [month, setMonth] = useState("July");

  const [year, setYear] = useState(2002);

  useEffect(() => {
    const monthNumber = MONTH_NAMES.indexOf(month) + 1;

    const formattedDate = `${year}-${String(monthNumber).padStart(
      2,
      "0",
    )}-${String(day).padStart(2, "0")}`;

    onChange?.(formattedDate);
  }, [day, month, year]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.wheelContainer}>
          <DayWheel value={day} onChange={setDay} />
        </View>

        <View style={styles.wheelContainer}>
          <MonthWheel value={month} onChange={setMonth} />
        </View>

        <View style={styles.wheelContainer}>
          <YearWheel value={year} onChange={setYear} />
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
