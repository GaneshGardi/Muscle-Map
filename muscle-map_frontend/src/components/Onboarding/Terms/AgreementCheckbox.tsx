import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppCard from "@/components/AppCard/AppCard";
import AppText from "@/components/AppText/AppText";

import Colors from "@/theme/Colors";
import { Radius } from "@/theme/Radius";
import { Spacing } from "@/theme/Spacing";

interface Props {
  checked: boolean;
  onToggle: () => void;
  onPressTerms: () => void;
  onPressPrivacy: () => void;
}

export default function AgreementCheckbox({
  checked,
  onToggle,
  onPressTerms,
  onPressPrivacy,
}: Props) {
  return (
    <AppCard onPress={onToggle}>
      <View style={styles.row}>
        <View
          style={[
            styles.checkbox,
            checked && styles.checkboxChecked,
          ]}
        >
          {checked && (
            <Ionicons
              name="checkmark"
              size={18}
              color={Colors.textInverse}
            />
          )}
        </View>

        <View style={styles.textContainer}>
          <AppText variant="body">
            I agree to the{" "}
          </AppText>

          <View style={styles.linkRow}>
            <Pressable onPress={onPressTerms}>
              <AppText
                variant="body"
                color={Colors.primary}
                style={styles.link}
              >
                Terms & Conditions
              </AppText>
            </Pressable>

            <AppText variant="body"> and </AppText>

            <Pressable onPress={onPressPrivacy}>
              <AppText
                variant="body"
                color={Colors.primary}
                style={styles.link}
              >
                Privacy Policy
              </AppText>
            </Pressable>
          </View>
        </View>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  checkbox: {
    width: 28,
    height: 28,

    borderRadius: Radius.md,

    borderWidth: 2,
    borderColor: Colors.border,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 2,
  },

  checkboxChecked: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },

  textContainer: {
    flex: 1,
    marginLeft: Spacing.md,
  },

  linkRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 2,
  },

  link: {
    textDecorationLine: "underline",
  },
});