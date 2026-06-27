import { View } from "react-native";

import Screen from "@/components/Screen/Screen";
import AppInput from "@/components/AppInput/AppInput";
import AppButton from "@/components/AppButton/AppButton";

export default function Home() {

  return (

    <Screen>

      <View
        style={{
          marginTop: 70,
          gap: 20,
        }}
      >

        <AppInput
          label="Email"
          placeholder="Enter your email"
          leftIcon="mail-outline"
        />

        <AppInput
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
          leftIcon="lock-closed-outline"
        />

        <AppInput
          label="Email"
          placeholder="Wrong email"
          leftIcon="mail-outline"
          error="Please enter a valid email"
        />

        <AppButton
          title="Continue"
        />

      </View>

    </Screen>

  );

}