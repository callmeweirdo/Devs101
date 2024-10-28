// components/AuthButtons.js

import React from 'react';
import { Button } from 'tamagui';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const handleOAuth = async (startOAuthFlow, redirectUrl) => {
  try {
    const { createdSessionId, setActive } = await startOAuthFlow({
      redirectUrl,
    });
    if (createdSessionId) {
      setActive!({ session: createdSessionId });
    }
  } catch (err) {
    console.error('OAuth error', err);
  }
};

export const SignInWithGoogleButton = ({ buttonStyle }) => {
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const redirectUrl = Linking.createURL('/(devs)', { scheme: 'myapp' });

  return (
    <Button onPress={() => handleOAuth(startOAuthFlow, redirectUrl)} {...buttonStyle}>
      Sign in with Google
    </Button>
  );
};

export const SignInWithGitHubButton = ({ buttonStyle }) => {
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_github' });
  const redirectUrl = Linking.createURL('/(devs)', { scheme: 'myapp' });

  return (
    <Button onPress={() => handleOAuth(startOAuthFlow, redirectUrl)} {...buttonStyle}>
      Sign in with GitHub
    </Button>
  );
};

export const SignInWithLinkedInButton = ({ buttonStyle }) => {
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_linkedin' });
  const redirectUrl = Linking.createURL('/(devs)', { scheme: 'myapp' });

  return (
    <Button onPress={() => handleOAuth(startOAuthFlow, redirectUrl)} {...buttonStyle}>
      Sign in with LinkedIn
    </Button>
  );
};

export const SignUpWithGoogleButton = ({ buttonStyle }) => {
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const redirectUrl = Linking.createURL('/(devs)', { scheme: 'myapp' });

  return (
    <Button onPress={() => handleOAuth(startOAuthFlow, redirectUrl)} {...buttonStyle}>
      Sign up with Google
    </Button>
  );
};
