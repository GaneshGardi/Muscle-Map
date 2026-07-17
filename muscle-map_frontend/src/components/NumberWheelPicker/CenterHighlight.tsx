import React from "react";

import {
 StyleSheet,
 View,
} from "react-native";


import { ITEM_HEIGHT } from "./WheelItem";


export default function CenterHighlight(){


return(

<View
pointerEvents="none"

style={styles.container}

/>


);


}



const styles = StyleSheet.create({


container:{


position:"absolute",


height:ITEM_HEIGHT,


left:16,

right:16,


top:"50%",


marginTop:
-(ITEM_HEIGHT/2),


borderRadius:28,


backgroundColor:"#FFFFFF",


shadowColor:"#000",


shadowOpacity:0.08,


shadowRadius:8,


shadowOffset:{
 width:0,
 height:4,
},


elevation:3,


},


});