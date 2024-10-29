import '../tamagui-web.css';
import { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Link, SplashScreen, Stack, Tabs } from 'expo-router';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';
import { Button, useTheme } from 'tamagui';
import { Atom, AudioWaveform, Briefcase, Home } from '@tamagui/lucide-icons';
import { Provider } from './Provider';
import CustomHeader from 'components/CustomHeader';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

export {
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  if (!publishableKey) {
    throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env');
  }

  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
        <Providers>
          <RootLayoutNav />
        </Providers>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

const Providers = ({ children }) => {
  return (
    <Provider>
      {children}
    </Provider>
  );
};

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
        <Tabs.Screen
          name="index"
          options={{
            title: 'Devs',
            tabBarIcon: ({ color }) => <Home color={color} />,
            headerRight: () => (
            <CustomHeader />
          ),
          }}
        />
        <Tabs.Screen
          name="(devs)"
          options={{
            title: 'Explore Devs',
            tabBarIcon: ({ color }) => <Atom color={color} />,
            tabBarLabel: 'Devs',
            headerShown: true,
            headerTitle: 'Developers Hub',
            headerRight: () => (
            <CustomHeader />
          ),
          }}
        />
        <Tabs.Screen
          name="[dev]"
          options={{
            title: 'Dev Profile',
            tabBarIcon: ({ color }) => <Briefcase color={color} />,
            tabBarLabel: 'Dev',
            headerShown: false,
            // headerTitle: 'Developers Hub',
            headerRight: () => (
              <CustomHeader />
            ),
            tabBarButton: () => null,  // Hide this tab from the tab bar
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}