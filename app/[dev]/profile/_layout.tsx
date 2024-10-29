import { Link, Stack } from 'expo-router';
import { Button, useTheme } from 'tamagui';
import CustomHeader from 'components/CustomHeader';

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Devs',
          headerRight: () => (
              <CustomHeader />
            ),
          headerShown: true,
        }}
      />

    </Stack>
  );
}