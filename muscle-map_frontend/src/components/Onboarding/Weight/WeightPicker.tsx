import { useState } from "react";
import { StyleSheet, View } from "react-native";

import WeightUnitToggle from "./WeightUntiToggle";
import WeightRuler from "./WeightRuler";

export default function WeightPicker() {
  const [unit, setUnit] = useState<"kg" | "lb">("kg");
  const [weight, setWeight] = useState(72);


  const handleUnitChange = (newUnit: "kg" | "lb") => {

    if(newUnit === unit) return;

    if(newUnit === "lb"){
        setWeight(Number((weight * 2.20462).toFixed(1)));
    }else{
        setWeight(Number((weight / 2.20462).toFixed(1)));
    }

    setUnit(newUnit);
  }


  return (



    <View style={styles.container}>
      <WeightUnitToggle
        value={unit}
        onChange={handleUnitChange}
      />

      <WeightRuler
        value={weight}
        unit={unit}
        onValueChange={setWeight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
  },
});