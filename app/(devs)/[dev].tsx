import { ScrollView, Stack, YStack } from 'tamagui';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import DevHome from 'components/DevHome';
import { DevSkill } from 'components/DevSkill';
import { DevProjects } from 'components/DevProjects';

const Dev = () => {
  const { dev } = useLocalSearchParams<{ dev: string }>();

  return (
    <ScrollView
      backgroundColor="$background"
      padding="$4"
      borderRadius="$4"
    >
      <YStack space="$5">
        <DevHome />
        <DevSkill />
        <DevProjects />
      </YStack>
    </ScrollView>
  );
}

export default Dev;
