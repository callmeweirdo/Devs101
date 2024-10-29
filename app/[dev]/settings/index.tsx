import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ProfileSettingTab from 'components/ProfileSettingTab';

export default function Profile() {
  const { dev } = useLocalSearchParams<{ dev: string }>();

  return (
    <>
      <ProfileSettingTab />
    </>
  );
}