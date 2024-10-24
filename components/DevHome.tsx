import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Stack, XStack, YStack } from 'tamagui';

const DevHome = () => {
    const {dev} = useLocalSearchParams<{ dev: string }>();
  return (
      <>
        <View>
            <XStack  gap="$4" elevation={10} >
                  <YStack>
                      <Text>Lorem ipsum dolor sit amet.</Text>
                  </YStack>
                  <YStack>
                      <Text>Lorem ipsum dolor sit amet.</Text>
                  </YStack>
            </XStack>
        </View>
      </>
  )
}

export default DevHome;