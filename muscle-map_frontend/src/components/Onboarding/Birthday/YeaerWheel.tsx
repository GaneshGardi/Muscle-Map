import { useEffect, useRef } from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";


const ITEM_HEIGHT = 56;


const START_YEAR = 1950;
const END_YEAR = 2050;


const YEARS = Array.from(
  {
    length: END_YEAR - START_YEAR + 1,
  },
  (_, index) => START_YEAR + index
);



interface Props {

  value: number;

  onChange: (value:number)=>void;

}



export default function YearWheel({
  value,
  onChange,
}:Props){


const listRef =
useRef<FlatList<number>>(null);



useEffect(()=>{

  const index =
    YEARS.indexOf(value);


  requestAnimationFrame(()=>{

    listRef.current?.scrollToIndex({

      index:index >=0 ? index : 0,

      animated:false,

    });

  });


},[]);



return (

<View style={styles.container}>


<View style={styles.highlight}/>


<FlatList

ref={listRef}

data={YEARS}

keyExtractor={(item)=>item.toString()}


showsVerticalScrollIndicator={false}


snapToInterval={ITEM_HEIGHT}


decelerationRate="fast"


bounces={false}

alwaysBounceVertical={false}

overScrollMode="never"


getItemLayout={(_,index)=>({

length:ITEM_HEIGHT,

offset:ITEM_HEIGHT*index,

index,

})}



contentContainerStyle={{

paddingTop:ITEM_HEIGHT*2,

paddingBottom:ITEM_HEIGHT*2,

}}



onMomentumScrollEnd={(event)=>{


const rawIndex =
Math.round(
event.nativeEvent.contentOffset.y /
ITEM_HEIGHT
);



const index =
Math.max(
0,
Math.min(
rawIndex,
YEARS.length-1
)
);



listRef.current?.scrollToOffset({

offset:index*ITEM_HEIGHT,

animated:true,

});



onChange(
YEARS[index]
);



}}



renderItem={({item})=>(

<View style={styles.item}>


<Text

style={[

styles.text,

item===value &&
styles.selectedText,

]}

>

{item}

</Text>


</View>

)}


/>


</View>

);

}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    height: ITEM_HEIGHT * 5,
    overflow: "hidden",
    // width: "100%"
  },

  highlight: {
    position: "absolute",

    top: ITEM_HEIGHT * 2,

    alignSelf: "center",

    width: "100%",

    height: ITEM_HEIGHT,

    backgroundColor: "#F4F4F4",

    borderRadius: 20,

    //   zIndex: 0,
  },


item:{

height:ITEM_HEIGHT,

justifyContent:"center",

alignItems:"center",

},



text:{

fontSize:18,

color:"#BEBEBE",

fontWeight:"500",

},



selectedText:{

fontSize:26,

color:"#223746",

fontWeight:"700",

},


});