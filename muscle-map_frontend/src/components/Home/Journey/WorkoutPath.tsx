import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

import { Colors } from "@/theme/AppTheme";

import {
  NODE_CONTAINER_WIDTH,
  NODE_SIZE,
  SIDE_PADDING,
} from "./Node/WorkoutNode.styles";

interface WorkoutPathProps {
  nodeYPositions: (number | null)[];
  positionOffset: number;
  containerWidth: number;
  containerHeight: number;
}

export default function WorkoutPath({
  nodeYPositions,
  positionOffset,
  containerWidth,
  containerHeight,
}: WorkoutPathProps) {
  const isReady =
    nodeYPositions.length > 1 &&
    nodeYPositions.every(
      (y) => y !== null
    ) &&
    containerWidth > 0 &&
    containerHeight > 0;

  if (!isReady) {
    return null;
  }

  const leftCx =
    SIDE_PADDING +
    NODE_CONTAINER_WIDTH / 2;

  const rightCx =
    containerWidth -
    SIDE_PADDING -
    NODE_CONTAINER_WIDTH / 2;

  const points = nodeYPositions.map(
    (y, reversedIndex) => {
      const isLeft =
        (positionOffset + reversedIndex) %
          2 ===
        0;

      return {
        x: isLeft ? leftCx : rightCx,
        y:
          (y as number) +
          NODE_SIZE / 2,
      };
    }
  );

  let d = `M ${points[0].x} ${points[0].y}`;

  for (
    let i = 1;
    i < points.length;
    i++
  ) {
    const previous = points[i - 1];
    const current = points[i];

    const midY =
      (previous.y + current.y) / 2;

    d += ` C ${previous.x} ${midY}, ${current.x} ${midY}, ${current.x} ${current.y}`;
  }

  return (
    <View
      pointerEvents="none"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: containerWidth,
        height: containerHeight,
      }}
    >
      <Svg
        width={containerWidth}
        height={containerHeight}
      >
        <Path
          d={d}
          fill="none"
          stroke={Colors.border1}
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="10 10"
        />
      </Svg>
    </View>
  );
}