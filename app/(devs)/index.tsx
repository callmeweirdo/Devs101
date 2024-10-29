import { ScrollView, YStack, H2 } from 'tamagui';
import React from 'react';
import { CardDemo } from 'components/DevsCards'; // Import the CardDemo component

const Home = () => {
  return (
    <>
      <ScrollView
        maxHeight="100%"
        // width="100%"
        backgroundColor="$background"
        padding="$4"
        borderRadius="$4"
      > 
         <YStack space="$4" alignItems="center">
          <H2 textAlign="center" color="$color">Developer Showcase</H2>
          <CardDemo /> {/* Render the CardDemo component with cards */}
    </YStack> 
         </ScrollView >
    </>
  );
};

export default Home;