import { useEffect, useRef } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ITEM_HEIGHT = 56;

const MONTHS = [
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
  value: string;
  onChange: (value: string) => void;
}

export default function MonthWheel({ value, onChange }: Props) {
  const listRef = useRef<FlatList<string>>(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      listRef.current?.scrollToIndex({
        index: MONTHS.indexOf(value),
        animated: false,
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.highlight} />

      <FlatList
        ref={listRef}
        data={MONTHS}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        overScrollMode="never"
        decelerationRate="fast"
        bounces={false}
        disableIntervalMomentum={true}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        contentContainerStyle={{
          paddingTop: ITEM_HEIGHT * 2,
          paddingBottom: ITEM_HEIGHT * 5,
        }}
        onScrollBeginDrag={(event) => {
          const offset = event.nativeEvent.contentOffset.y;

          if (offset < 0) {
            listRef.current?.scrollToOffset({
              offset: 0,
              animated: false,
            });
          }
        }}
        onMomentumScrollEnd={(event) => {
          const rawIndex = Math.round(
            event.nativeEvent.contentOffset.y / ITEM_HEIGHT,
          );

          const index = Math.max(0, Math.min(rawIndex, MONTHS.length - 1));

          listRef.current?.scrollToOffset({
            offset: index * ITEM_HEIGHT,
            animated: true,
          });

          onChange(MONTHS[index]);
        }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={[styles.text, item === value && styles.selectedText]}>
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

  item: {
    height: ITEM_HEIGHT,

    justifyContent: "center",

    alignItems: "center",
  },

  text: {
    fontSize: 18,

    color: "#BEBEBE",

    fontWeight: "500",
  },

  selectedText: {
    fontSize: 24,

    color: "#223746",

    fontWeight: "700",
  },
});
