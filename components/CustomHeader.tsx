// components/CustomHeader.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Avatar, XStack, YStack, Button } from 'tamagui';
import { useUser, useAuth } from '@clerk/clerk-expo';
import { useNetInfo } from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomHeader = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const netInfo = useNetInfo();

  const handleLogout = async () => {
    try {
      await signOut();
      alert('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <XStack alignItems="center" space="$3">
      {/* Avatar and user details */}
      <Avatar size="$4">
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

      {/* Logout Button */}
      <Button
        size="$3"
        theme="red"
        marginLeft="$3"
        onPress={handleLogout}
        icon={<Icon name="sign-out" size={16} color="#fff" />}
      >
        Logout
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
