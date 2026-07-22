import React from "react";
import { View } from "react-native";
import { router } from "expo-router";

import AppButton from "@/components/AppButton/AppButton";
import { deleteToken } from "@/storage/tokenStorage";

export default function Home() {
  const handleLogout = async () => {
    try {
      await deleteToken();

      router.replace("/(auth)/login");
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppButton
        title="Logout"
        onPress={handleLogout}
      />
    </View>
  );
}