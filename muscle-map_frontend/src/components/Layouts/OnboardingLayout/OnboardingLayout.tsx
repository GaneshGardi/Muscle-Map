import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
} from "react-native";

import Screen from "../../Screen/Screen";
import AppButton from "../../AppButton/AppButton";
import OnboardingHeader from "../../Onboarding/OnboardingHeader";


interface Props {
  title: string;
  subtitle?: string;

  currentStep: number;
  totalSteps: number;

  children: React.ReactNode;

  buttonTitle?: string;
  onButtonPress?: () => void;

  buttonDisabled?: boolean;
  buttonLoading?: boolean;

  showBackButton?: boolean;
}

export default function OnboardingLayout({
  title,
  subtitle,

  currentStep,
  totalSteps,

  children,

  buttonTitle,
  onButtonPress,

  buttonDisabled = false,
  buttonLoading = false,

  showBackButton = true,
}: Props) {

  const opacity = useRef(
    new Animated.Value(0)
  ).current;

  const translateY = useRef(
    new Animated.Value(12)
  ).current;

  useEffect(() => {

    Animated.parallel([

      Animated.timing(opacity,{
        toValue:1,
        duration:250,
        useNativeDriver:true,
      }),

      Animated.timing(translateY,{
        toValue:0,
        duration:250,
        useNativeDriver:true,
      }),

    ]).start();

  },[]);

  return (

    <Screen>

      <View style={styles.container}>

        <OnboardingHeader
          title={title}
          subtitle={subtitle}
          currentStep={currentStep}
          totalSteps={totalSteps}
          showBackButton={showBackButton}
        />

        <Animated.View
          style={[
            styles.content,
            {
              opacity,
              transform:[
                {
                  translateY,
                },
              ],
            },
          ]}
        >
          {children}
        </Animated.View>

        {buttonTitle && (

          <View style={styles.footer}>

            <AppButton
              title={buttonTitle}
              onPress={onButtonPress}
              disabled={buttonDisabled}
              loading={buttonLoading}
            />

          </View>

        )}

      </View>

    </Screen>

  );

}

const styles = StyleSheet.create({

  container:{
    flex:1,
  },

  content:{

    flex:1,

    marginTop:6,
  },

  footer:{

    paddingTop:20,

    paddingBottom:8,
  },

});