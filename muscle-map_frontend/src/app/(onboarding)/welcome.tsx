import { View, Text } from 'react-native'
import React from 'react'

import { deleteToken } from '@/storage/tokenStorage'
import {router} from 'expo-router'
import AppButton from '@/components/AppButton/AppButton'



const welcome = () => {


  const handleLogout = async () => {
    await deleteToken();
    router.replace("/(auth)/login");
  };

  return (
    <View>
      <Text>welcome</Text>
      <AppButton
        title="Logout"
        onPress={handleLogout}
      />
    </View>
  )
}

export default welcome