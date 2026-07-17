import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import AppText from "@/components/AppText/AppText";
import NumberWheelPicker from "@/components/NumberWheelPicker/NumberWheelPicker";

import Colors from "@/theme/Colors";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function CmPicker({
  value,
  onChange,
}: Props) {
  return (
    <View style={styles.container}>

      <View style={styles.valueContainer}>
        <AppText
          variant="display"
          style={styles.value}
        >
          {value}
        </AppText>

        <AppText
          variant="bodyMedium"
          color={Colors.textSecondary}
        >
          cm
        </AppText>
      </View>

      <NumberWheelPicker
        min={100}
        max={240}
        value={value}
        onValueChange={onChange}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
  },

  valueContainer:{

    alignItems:"center",

    marginTop:16,

    marginBottom:28,
  },

  value:{

    color:Colors.primary,

    fontSize:38,

    fontWeight:"700",
  },

});