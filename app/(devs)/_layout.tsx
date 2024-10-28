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
            <Link href="/" asChild>
              <Button mr="$4" bg="$purple8" color="$purple12">
                Join Now
              </Button>
            </Link>
          ),
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="[dev]"
        options={{
          title: 'Developer Profile',
          headerRight: () => <CustomHeader />, // Place CustomHeader in headerRight
        }}
      />
    </Stack>
  );
}
