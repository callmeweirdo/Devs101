import { ScrollView, YStack, H2, XStack } from 'tamagui';
import React from 'react';
import  {DevsCardProfiles}  from 'components/DevsCards'; // Import the DevsProfileCards component

const Home = () => {
  return (
    <YStack
      backgroundColor="$background"
      padding="$4"
      borderRadius="$4"
      flex={1}
    >
      {/* Static Title */}
      <H2 textAlign="center" color="$color" paddingVertical="$4">
        Developer Showcase
      </H2>

      {/* Scrollable Cards */}
      <ScrollView>
        <DevsCardProfiles /> {/* Render the CardDemo component with cards */}
      </ScrollView>
    </YStack>
  );
};

export default Home;