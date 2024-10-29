import React from 'react';
import { Link, Stack } from 'expo-router';
import { Button, useTheme } from 'tamagui';
import CustomHeader from 'components/CustomHeader';

export default function TabLayout() {
  const theme = useTheme();

  // Extracted header button for readability and reusability
  const renderHeaderRightButton = () => (
    <Link href="/" asChild>
      <Button
        mr="$4"
        bg="yellow"
        color="yellow"
        borderRadius="$3"
      >
        Join Now
      </Button>
    </Link>
  );

  return (
    <Stack screenOptions={{ 
      // headerShown: true,
    }}
    >
      <Stack.Screen
        name='index'
        options={{ 
            // headerTitle: 'Developers Profile',
          title: "Developers Profile",
          headerRight: () => (
              <CustomHeader />
          ),
          headerShown: true,
         }}
      />
        <Stack.Screen
        name='/(devs)/[dev]/profile/'
        options={{ 
            // headerTitle: 'Developers Profile',
          title: "Developers Profile",
          headerRight: () => (
              <CustomHeader />
          ),
          headerShown: false,
         }}
      />

    </Stack>
  );
}