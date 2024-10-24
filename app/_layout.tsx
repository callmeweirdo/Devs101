import '../tamagui-web.css'

import { useEffect } from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Link, SplashScreen, Stack, Tabs } from 'expo-router'
import { Provider } from './Provider'
import { Button, useTheme } from 'tamagui'
import { Atom, AudioWaveform, Home } from '@tamagui/lucide-icons'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  return (
    <Providers>
      <RootLayoutNav />
    </Providers>
  )
}

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const theme = useTheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.red10.val,
          tabBarStyle: {
            backgroundColor: theme.background.val,
            borderTopColor: theme.borderColor.val,
          },
          headerStyle: {
            backgroundColor: theme.background.val,
            borderBottomColor: theme.borderColor.val,
          },
          headerTintColor: theme.color.val,
        }}
      >
        {/* First Tab: Home */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Devs',
            tabBarIcon: ({ color }) => <Home color={color} />,
            headerRight: () => (
              <Link href="/" asChild>
                <Button mr="$4" bg="$purple8" color="$purple12">
                  Join Now
                </Button>
              </Link>
            ),
          }}
        />
        
        {/* Second Tab: Devs (Customizing this one) */}
        <Tabs.Screen
          name="(devs)"
          options={{
            title: 'Explore Devs', // Custom Title
            tabBarIcon: ({ color }) => <Atom color={color} />, // Custom Icon (Atom from Lucide icons)
            tabBarLabel: 'Devs', // Label for the tab
            headerShown: false, // Show header for this tab
            headerTitle: 'Developers Hub', // Custom header title
            headerRight: () => (
              <Link href="/" asChild>
                <Button mr="$4" bg="$blue8" color="$blue12">
                  Settings
                </Button>
              </Link>
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  )
}
