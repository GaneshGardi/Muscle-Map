import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import AppText from "@/components/AppText/AppText";

import Colors from "@/theme/Colors";
import { Spacing } from "@/theme/Spacing";


export default function TermsPage() {

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      <AppText variant="h1">
        Terms & Conditions
      </AppText>


      <AppText
        variant="caption"
        color={Colors.textSecondary}
        style={styles.updated}
      >
        Last updated: July 2026
      </AppText>


      <Section title="Welcome to Muscle Map">

        Muscle Map helps you track your workouts,
        fitness goals, and progress over time.

        By creating an account and using our
        application, you agree to these terms
        and conditions.

      </Section>


      <Section title="1. Use of the App">

        Muscle Map is designed to help users
        organize their fitness journey.

        The information provided in the app is
        for general fitness purposes only and
        should not be considered medical advice.

      </Section>


      <Section title="2. User Responsibilities">

        You are responsible for maintaining the
        accuracy of your personal information.

        You should use the app responsibly and
        follow safe workout practices.

      </Section>


      <Section title="3. Fitness Information">

        Workout recommendations and calorie
        suggestions are generated based on
        information provided by you.

        Results may vary depending on individual
        effort, consistency, and lifestyle.

      </Section>


      <Section title="4. Account Security">

        You are responsible for keeping your
        account credentials secure.

        Please contact support if you notice
        unauthorized access.

      </Section>


      <Section title="5. Changes to Terms">

        We may update these terms from time to
        time to improve our services.

        Continued use of Muscle Map means you
        accept the updated terms.

      </Section>


      <Section title="Contact Us">

        If you have questions about these terms,
        please contact the Muscle Map support team.

        Email:
        support@musclemap.app

      </Section>


    </ScrollView>
  );
}


function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {

  return (
    <View style={styles.section}>

      <AppText variant="h2">
        {title}
      </AppText>


      <AppText
        variant="body"
        color={Colors.textSecondary}
        style={styles.text}
      >
        {children}
      </AppText>

    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:Colors.background,
  },


  content:{
    padding:Spacing.xl,
    paddingBottom:Spacing.xxxl,
  },


  updated:{
    marginTop:Spacing.sm,
  },


  section:{
    marginTop:Spacing.xl,
  },


  text:{
    marginTop:Spacing.sm,
    lineHeight:24,
  },

});