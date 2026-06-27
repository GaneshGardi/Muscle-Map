import { View } from "react-native";

import AppText from "../components/AppText";

import Colors from "../theme/Colors";
import { Spacing } from "../theme/Spacing";
import { Radius } from "../theme/Radius";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: Spacing.lg,
      }}
    >
      {/* Logo Placeholder */}
      <View
        style={{
          marginTop: 70,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: Colors.surfaceVariant,
            borderRadius: Radius.md,
          }}
        />

        <AppText
          variant="title"
          style={{
            marginTop: 12,
          }}
        >
          Muscle Map
        </AppText>
      </View>

      {/* Heading */}
      <View
        style={{
          marginTop: 45,
        }}
      >
        <AppText variant="h1">
          Continue your
        </AppText>

        <AppText variant="h1">
          Fitness Journey
        </AppText>

        <AppText
          variant="bodySmall"
          style={{
            marginTop: 12,
          }}
        >
          Welcome back! Sign in to continue.
        </AppText>
      </View>

      {/* Email */}
      <View
        style={{
          marginTop: 35,
        }}
      >
        <AppText variant="bodySmall">
          Your Email
        </AppText>

        <View
          style={{
            marginTop: 8,
            height: 52,
            backgroundColor: Colors.surface,
            borderRadius: Radius.md,
            borderWidth: 1,
            borderColor: Colors.primary,
          }}
        />
      </View>

      {/* Password */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <AppText variant="bodySmall">
          Your Password
        </AppText>

        <View
          style={{
            marginTop: 8,
            height: 52,
            backgroundColor: Colors.surface,
            borderRadius: Radius.md,
            borderWidth: 1,
            borderColor: Colors.primary,
          }}
        />
      </View>

      {/* Forgot password */}
      <AppText
        variant="caption"
        style={{
          marginTop: 8,
          alignSelf: "flex-end",
        }}
      >
        Forgot Password?
      </AppText>

      {/* Login Button Placeholder */}
      <View
        style={{
          marginTop: 28,
          height: 56,
          backgroundColor: Colors.primary,
          borderRadius: Radius.md,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppText variant="button">
          Log In
        </AppText>
      </View>

      {/* Register */}
      <View
        style={{
          marginTop: 40,
          alignItems: "center",
        }}
      >
        <AppText variant="caption">
          Don't have an account?
        </AppText>

        <View
          style={{
            marginTop: 16,
            width: "100%",
            height: 56,
            backgroundColor: Colors.secondary,
            borderRadius: Radius.md,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppText variant="button">
            Register
          </AppText>
        </View>
      </View>
    </View>
  );
}