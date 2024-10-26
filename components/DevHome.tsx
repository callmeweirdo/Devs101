import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { XStack, YStack, Button, Anchor } from 'tamagui';

const DevHome = () => {
  const { dev } = useLocalSearchParams<{ dev: string }>();

  return (
    <View style={styles.container}>
      <XStack
        flex={1}
        gap="$4"
        justifyContent="center"
        alignItems="center"
        $gtSm={{ flexDirection: 'row' }}  // Row for larger screens
        $sm={{ flexDirection: 'column' }} // Column for smaller screens
      >
        {/* Right Column (Profile Image and Social Links, 40% on large screens) */}
        <YStack
          flex={0.4}
          style={styles.rightColumn}
          bg="rgba(255, 255, 255, 0.8)"
          padding="$4"
          alignItems="center"
          justifyContent="center"
          $sm={{ flex: 1 }}  // Full width on small screens
        >
          {/* Profile Image */}
          <Image
            source={{ uri: 'https://cdn.dribbble.com/userupload/5859589/file/original-55534b3895c5e6fee63696b7418eade7.png?resize=752x' }}
            style={styles.profileImage}
          />

          {/* Full Name */}
          <Text style={styles.fullName}>Developer Name</Text>

          {/* Social Media Links */}
          <Text style={styles.subheading}>Find me on</Text>
          <XStack space="$3" marginTop="$2">
            <Anchor href="https://github.com" target="_blank">
              <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/25/25231.png' }} style={styles.icon} />
            </Anchor>
            <Anchor href="https://linkedin.com" target="_blank">
              <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/61/61109.png' }} style={styles.icon} />
            </Anchor>
            <Anchor href="https://twitter.com" target="_blank">
              <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/733/733579.png' }} style={styles.icon} />
            </Anchor>
          </XStack>
        </YStack>

        {/* Left Column (Description and Contact Info, 60% on large screens) */}
        <YStack
          flex={0.6}
          style={styles.leftColumn}
          bg="rgba(255, 255, 255, 0.8)"
          padding="$4"
          justifyContent="center"
          $sm={{ flex: 1 }}  // Full width on small screens
        >
          <Text style={styles.title}>Hi, I'm {dev}</Text>
          <Text style={styles.description}>
            I'm a passionate developer specializing in web3 and mobile app development.
            I love building seamless, high-performance applications with cutting-edge technologies.
          </Text>

          <Text style={styles.subheading}>Contact Me</Text>
          <Text>Email: developer@example.com</Text>
          <Text>Location: Abuja, Nigeria</Text>

          {/* Tip Button */}
          <Button theme="blue" size="$4" marginTop="$4" onPress={() => alert('Tipped!')}>
            Tip
          </Button>
        </YStack>
      </XStack>
    </View>
  );
};

export default DevHome;

// Custom Styles
const styles = StyleSheet.create({
  container: {
    height: '60%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',  // Center all content vertically
  },
  leftColumn: {
    borderRadius: 10,
    padding: 16,
    justifyContent: 'center',
  },
  rightColumn: {
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },
  fullName: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100, // Rounded image
    overflow: 'hidden',
    marginBottom: 16,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
