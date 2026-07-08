import { Platform } from "react-native";

export const Shadows = {

  small: Platform.select({

    ios:{
      shadowColor:"#000",
      shadowOpacity:0.08,
      shadowRadius:4,
      shadowOffset:{width:0,height:2},
    },

    android:{
      elevation:2,
    },

  }),

  medium: Platform.select({

    ios:{
      shadowColor:"#000",
      shadowOpacity:0.12,
      shadowRadius:8,
      shadowOffset:{width:0,height:4},
    },

    android:{
      elevation:4,
    },

  }),

  large: Platform.select({

    ios:{
      shadowColor:"#000",
      shadowOpacity:0.15,
      shadowRadius:8,
      elevaltion: 4,
      shadowOffset:{width:0,height:6},
    },

    android:{
      elevation:8,
    },

  }),

}