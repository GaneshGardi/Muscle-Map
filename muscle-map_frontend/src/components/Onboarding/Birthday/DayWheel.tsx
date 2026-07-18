import { useEffect, useRef } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ITEM_HEIGHT = 56;

const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function DayWheel({ value, onChange }: Props) {
  const listRef = useRef<FlatList<number>>(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      listRef.current?.scrollToIndex({
        index: value - 1,
        animated: false,
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.highlight} />

      <FlatList
        ref={listRef}
        data={DAYS}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        disableIntervalMomentum={true}
        overScrollMode="never"
        decelerationRate="fast"
        bounces={false}
        alwaysBounceVertical={false}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        contentContainerStyle={{
          paddingTop: ITEM_HEIGHT * 2,
          paddingBottom: ITEM_HEIGHT * 5.7,
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

          const index = Math.max(0, Math.min(rawIndex, DAYS.length - 1));

          listRef.current?.scrollToOffset({
            offset: index * ITEM_HEIGHT,
            animated: true,
          });

          onChange(DAYS[index]);
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
    // flex: 1,
    height: ITEM_HEIGHT * 5,
    overflow: "hidden",
  },

  highlight: {
    position: "absolute",

    top: ITEM_HEIGHT * 2,

    alignSelf: "center",

    //   width: "75%",
    width: ITEM_HEIGHT,

    height: ITEM_HEIGHT,

    backgroundColor: "#F4F4F4",

    borderRadius: 20,

    //   zIndex: 10,
  },

  item: {
    height: ITEM_HEIGHT,

    justifyContent: "center",

    alignItems: "center",
  },

  text: {
    fontSize: 22,

    color: "#BEBEBE",

    fontWeight: "500",
  },

  selectedText: {
    fontSize: 26,

    color: "#223746",

    fontWeight: "700",
  },
});
