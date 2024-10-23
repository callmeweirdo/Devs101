import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const Dev = () => {
    const {dev} = useLocalSearchParams<{ dev: string }>();
  return (
    <View>
      <Text>{dev}</Text>
    </View>
  )
}

export default Dev;