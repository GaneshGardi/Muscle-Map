import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import { ITEM_HEIGHT } from "@/components/NumberWheelPicker/WheelItem";

import AppText from "@/components/AppText/AppText";
import NumberWheelPicker from "@/components/NumberWheelPicker/NumberWheelPicker";

import Colors from "@/theme/Colors";
import { FA5Style } from "@expo/vector-icons/build/FontAwesome5";

interface Props {
  feet: number;
  inches: number;

  onFeetChange: (value: number) => void;
  onInchesChange: (value: number) => void;
}

export default function FtPicker({
  feet,
  inches,
  onFeetChange,
  onInchesChange,
}: Props) {

  return (
    <View style={styles.container}>

      <View style={styles.valueContainer}>

        <AppText
          variant="display"
          style={styles.value}
        >
          {feet}' {inches}"
        </AppText>

      </View>

      <View style={styles.wheelsContainer}>

        <View 
            pointerEvents="none"
            style={styles.highlight}
        />

        <View style={styles.wheelSection}>

          <AppText
            variant="bodyMedium"
            color={Colors.textSecondary}
            style={styles.label}
          >
            Feet
          </AppText>

          <NumberWheelPicker
            min={1}
            max={12}
            value={feet}
            onValueChange={onFeetChange}
            showHighlight={false}
          />

        </View>

        <View style={styles.separator} />

        <View style={styles.wheelSection}>

          <AppText
            variant="bodyMedium"
            color={Colors.textSecondary}
            style={styles.label}
          >
            Inches
          </AppText>

          <NumberWheelPicker
            min={0}
            max={12}
            value={inches}
            onValueChange={onInchesChange}
            showHighlight={false}
          />

        </View>

      </View>

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

    fontSize:38,

    fontWeight:"700",

    color:Colors.primary,
  },

  wheelsContainer:{

    flexDirection:"row",

    justifyContent:"space-evenly",

    alignItems:"flex-start",
  },

  wheelSection:{

    width:"42%",

    zIndex: 2,

    alignItems:"center",
  },

  label:{

    marginBottom:14,

    fontWeight:"600",
  },

  separator:{

    width:12,
  },

  highlight: {
  position: "absolute",

  left: 12,
  right: 12,

  top: 39 + ITEM_HEIGHT * 2,

  height: ITEM_HEIGHT,

  borderRadius: 18,

  zIndex: 1,

  backgroundColor: "#FFFFFF",

  borderWidth: 1,

  borderColor: "#ECECEC",

  
},

});