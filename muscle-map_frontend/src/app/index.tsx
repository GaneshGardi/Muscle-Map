import { StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton/AppButton";
import AppInput from "../components/AppInput/AppInput";
import Divider from "../components/Divider/Divider";
import AuthLayout from "../components/Layouts/AuthLayout/AuthLayout";
import AuthFooter from "@/components/AuthFooter/AuthFooter";


export default function Home() {
  return (
    <AuthLayout
      showLogo
      title={"Continue your\nFitness Journey"}
      subtitle="Sign in to keep progressing towards your goals."
    >
      <View style={styles.form}>
        <AppInput label="Email" placeholder="Enter your email" />

        <View style={styles.fieldGap} />

        <AppInput
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
        />

        <View style={styles.buttonGap} />

        <AppButton title="Continue" onPress={() => {}} />

        <View style={styles.dividerGap} />

        <Divider />

        <AuthFooter
        question="Don't have an Account?"
        action="Register"
        onPress={() => {}}
        />
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
  },

  fieldGap: {
    height: 16,
  },

  buttonGap: {
    height: 24,
  },

  dividerGap: {
    height: 32,
  },
});
