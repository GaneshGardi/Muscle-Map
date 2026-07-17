import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import UnitToggle from "@/components/Onboarding/UnitToggle";

import CmPicker from "./CmPicker";
import FtPicker from "./FtPicker";

import {
  cmToFeetInches,
  feetInchesToCm,
} from "@/components/Onboarding/HeightPicker/HeightUtils";

interface Props {
  value?: number;
  onChange?: (heightCm: number) => void;
}

export default function HeightPicker({
  value = 176,
  onChange,
}: Props) {
  const [unit, setUnit] = useState<"cm" | "ft">("cm");

  const [heightCm, setHeightCm] = useState(value);

  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(9);

  /**
   * Initial Sync
   */
  useEffect(() => {
    const converted = cmToFeetInches(value);

    setFeet(converted.feet);
    setInches(converted.inches);
  }, []);

  /**
   * CM -> FT
   */
  useEffect(() => {
    if (unit !== "cm") return;

    const converted = cmToFeetInches(heightCm);

    setFeet(converted.feet);
    setInches(converted.inches);

    onChange?.(heightCm);
  }, [heightCm]);

  /**
   * FT -> CM
   */
  useEffect(() => {
    if (unit !== "ft") return;

    const cm = feetInchesToCm(
      feet,
      inches
    );

    setHeightCm(cm);

    onChange?.(cm);
  }, [feet, inches]);

  return (
    <View style={styles.container}>
      <UnitToggle
        leftLabel="CM"
        rightLabel="FT"
        value={unit}
        onChange={(v) =>
          setUnit(v as "cm" | "ft")
        }
      />

      <View style={styles.content}>
        {unit === "cm" ? (
          <CmPicker
            value={heightCm}
            onChange={setHeightCm}
          />
        ) : (
          <FtPicker
            feet={feet}
            inches={inches}
            onFeetChange={setFeet}
            onInchesChange={setInches}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,

    marginTop: 28,
  },
});