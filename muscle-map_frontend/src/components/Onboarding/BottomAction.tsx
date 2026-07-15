import { StyleSheet, View } from "react-native";

import AppButton from "../AppButton/AppButton";

import { Spacing } from "@/theme/Spacing";

interface Props {
  title: string;

  onPress: () => void;

  loading?: boolean;

  disabled?: boolean;
}

export default function BottomAction({
  title,
  onPress,
  loading = false,
  disabled = false,
}: Props) {
  return (
    <View style={styles.container}>
      <AppButton
        title={title}
        onPress={onPress}
        loading={loading}
        disabled={disabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 28,
  },
});
