import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Stack, XStack, YStack } from 'tamagui';
import DevHome from 'components/DevHome';
import DevSkill from 'components/DevSkill';

const Dev = () => {
    const {dev} = useLocalSearchParams<{ dev: string }>();
  return (
      <>
          <DevHome />
          <DevSkill />
      </>
  )
}

export default Dev;