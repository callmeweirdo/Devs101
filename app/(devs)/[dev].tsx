import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Stack, XStack, YStack } from 'tamagui';
import DevHome from 'components/DevHome';
// import DevSkill from 'components/DevSkill';
import { DevSkill } from 'components/DevSkill';

const Dev = () => {
    const {dev} = useLocalSearchParams<{ dev: string }>();
  return (
      <>
          <ScrollView
        // maxHeight="100%"
        // width="100%"
        backgroundColor="$background"
        padding="$4"
            borderRadius="$4"
            // overflow="hidden" // Hide any scrollbars that might appear
        >
          <DevHome />
          <DevSkill />
            </ScrollView>
      </>
  )
}

export default Dev;