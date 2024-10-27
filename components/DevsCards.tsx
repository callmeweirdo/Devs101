import type { CardProps } from 'tamagui';
import { Button, Card, H2, Image, Paragraph, XStack, YStack } from 'tamagui';
import { Link } from 'expo-router';
import React from 'react';

// CardDemo Component
export function CardDemo() {
  return (
    <YStack space="$4" alignItems="center" paddingHorizontal="$4" paddingVertical="$6">

      <ResponsiveGrid>
        {/* Generate multiple DevsCards */}
        {[...Array(6)].map((_, index) => (
          <DevsCards
            key={index}
            animation="bouncy"
            size="$4"
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
          />
        ))}
      </ResponsiveGrid>
    </YStack>
  );
}

// DevsCards Component
export function DevsCards(props: CardProps) {
  return (
    <Link href={{ pathname: "/(devs)/[dev]", params: { dev: "devvvvv" } }}>
      <Card
        elevate
        size="$4"
        bordered
        {...props}
        style={styles.cardContainer}
      >
        <Card.Header padded>
          <H2 textAlign="center">Dev101</H2>
          <Paragraph theme="alt2" textAlign="center">Now available</Paragraph>
        </Card.Header>
        <Card.Background>
          <Image
            resizeMode="contain"
            alignSelf="center"
            source={{
              width: 300,
              height: 300,
              uri: 'https://image.pngaaa.com/743/6496743-middle.png',
            }}
            style={styles.cardImage}
          />
        </Card.Background>
        <Card.Footer padded>
          <XStack justifyContent="center">
            <Button borderRadius="$10">Purchase</Button>
          </XStack>
        </Card.Footer>
      </Card>
    </Link>
  );
}

// ResponsiveGrid Component
export function ResponsiveGrid({ children }: { children: React.ReactNode }) {
  return (
    <XStack
      justifyContent="space-between" // Distribute cards evenly
      flexWrap="wrap" // Wrap cards to new rows
      paddingHorizontal="$2" // Adjust padding for better spacing
      paddingVertical="$4"
      space="$4"
      // Responsive widths for cards
      $xl={{ width: '24%' }} // 4 cards per row for extra large screens
      $lg={{ width: '24%' }}  // 4 cards per row for large screens
      $md={{ width: '32%' }}  // 3 cards per row for medium screens
      $sm={{ width: '48%' }}   // 2 cards per row for small screens
      $xs={{ width: '100%' }}   // 1 card per row for extra small screens
    >
      {children}
    </XStack>
  );
}

// Styles for cards
const styles = {
  cardContainer: {
    margin: '10px', // Space between cards
    borderRadius: 15, // Rounded corners for cards
    overflow: 'hidden', // Rounded corners for all content inside the card
    width: '100%', // Default width for cards
  },
  cardImage: {
    marginBottom: 8, // Space below the image
  },
};
