// components/CustomHeader.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Avatar, XStack, YStack, Button } from 'tamagui';
import { useUser, useAuth } from '@clerk/clerk-expo';
import { useNetInfo } from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomHeader = () => {
  const { user } = useUser();
  const { signOut, signIn } = useAuth();
  const netInfo = useNetInfo();
  const isLoggedIn = !!user;

  const handleAuthAction = async () => {
    if (isLoggedIn) {
      // Logout action
      try {
        await signOut();
        alert('Logged out successfully');
      } catch (error) {
        console.error('Logout error:', error);
      }
    } else {
      // Redirect to login
      signIn(); // This will open the login screen.
    }
  };

  return (
    <XStack alignItems="center" paddingHorizontal="$3" space="$3">
      {/* Avatar and user details */}
      <Avatar size="$4" marginRight="$2">
        <Avatar.Image src={user?.profileImageUrl} />
        <Avatar.Fallback>
          {user?.firstName?.charAt(0)}
          {user?.lastName?.charAt(0)}
        </Avatar.Fallback>
      </Avatar>

      <YStack>
        <Text style={styles.userName}>{user?.fullName || 'Guest'}</Text>
        <Text style={[styles.status, { color: netInfo.isConnected ? 'green' : 'red' }]}>
          {netInfo.isConnected ? 'Online' : 'Offline'}
        </Text>
      </YStack>

      {/* Login/Logout Button */}
      <Button
        size="$3"
        theme={isLoggedIn ? 'red' : 'blue'}
        marginRight="$3"
        onPress={handleAuthAction}
        icon={<Icon name={isLoggedIn ? 'sign-out' : 'sign-in'} size={16} color="#fff" />}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button>
    </XStack>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 12,
  },
});
