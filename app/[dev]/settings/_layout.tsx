import { Link, Stack } from 'expo-router';
import { Button, useTheme } from 'tamagui';
import CustomHeader from 'components/CustomHeader';

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide default header from the stack level
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Profile Setup',  // This custom title should override folder name
          headerRight: () => (
            <CustomHeader />
          ),
          headerShown: true, // Enable custom header only for this screen
        }}
      />
    </Stack>
  );
}