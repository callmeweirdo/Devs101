import { Link, Stack } from 'expo-router'
import { Button, useTheme } from 'tamagui'
import { Atom, AudioWaveform } from '@tamagui/lucide-icons'

export default function TabLayout() {
  const theme = useTheme()

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
          headerShown: false
        }}
      />
      
      <Stack.Screen
        name="[dev]"
        options={{
          title: "Developer"
        }}
      />
    </Stack>
  );
}