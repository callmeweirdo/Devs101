// app/[dev]/profile/index.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Profile() {
  const { dev } = useLocalSearchParams<{ dev: string }>();

  return (
    <View>
      <Text>Profile page for {dev}</Text>
    </View>
  );
}

Profile.options = {
  headerShown: true, // Disable header here to prevent stacking
};