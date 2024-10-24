import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Stack, XStack, YStack } from 'tamagui';

const Dev = () => {
    const {dev} = useLocalSearchParams<{ dev: string }>();
  return (
      <>
        <View>
            <XStack>
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

export default Dev;