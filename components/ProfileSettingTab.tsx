import { View, Text } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';

const ProfileSettingTab = () => {
    const { user } = useUser();

  console.log("Fetched user profile:", user);

  return (
    <View>
      <Text>{ user?.id}</Text>
    </View>
  )
}

export default ProfileSettingTab