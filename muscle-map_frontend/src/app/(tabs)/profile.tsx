import { View, Text } from 'react-native'
import React from 'react'

import { Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

import { removeToken } from "@/storage/tokenStorage";

import AppText from '@/components/AppText/AppText';

const profile = () => {
  return (
    <View>
      <Text>profile</Text>
      <Pressable

  onPress={async () => {
    await removeToken();

    console.log("Logged out");

    router.replace("/(auth)/login");
  }}
>
  <AppText >
    Logout
  </AppText>
</Pressable>
    </View>
  )
}

export default profile