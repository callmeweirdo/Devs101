import type { CardProps } from 'tamagui';
import { Button, Card, H2, Image, Paragraph, XStack, YStack } from 'tamagui';
import { Link } from 'expo-router';
import React from 'react';

export function CardDemo() {
  return (
    <YStack space="$4" alignItems="center" paddingHorizontal="$4" paddingVertical="$6">
      {/* Title Section */}
      <H2 textAlign="center" color="$color">
        Developer Cards
      </H2>

      <ResponsiveGrid>
        {/* Multiple DevsCards can be added here */}
        {[...Array(6)].map((_, index) => ( // Generates 6 cards as an example
          <DevsCards
            key={index}
            animation="bouncy"
            size="$5"
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
          />
        ))}
      </ResponsiveGrid>
    </YStack>
  );
}

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

// Create a responsive grid system component
export function ResponsiveGrid({ children }: { children: React.ReactNode }) {
  return (
    <XStack
      justifyContent="space-between" // Use space-between to distribute the cards evenly
      flexWrap="wrap" // Makes items wrap in a row
      paddingHorizontal="$4"
      paddingVertical="$4"
      space="$4"
      // Using breakpoints for responsive grid layout
      $xl={{ width: '20%' }}  // 5 cards per row for extra large screens
      $lg={{ width: '25%' }}   // 4 cards per row for large screens
      $md={{ width: '33.33%' }} // 3 cards per row for medium screens
      $sm={{ width: '50%' }}    // 2 cards per row for small screens
      $xs={{ width: '100%' }}    // 1 card per row for extra small screens
    >
      {children}
    </XStack>
  );
}

const styles = {
  cardContainer: {
    margin: '10px', // Add margin for spacing between cards
    borderRadius: 15, // Rounded corners for cards
    overflow: 'hidden', // Ensures rounded corners work for all content inside the card
    width: '100%', // Set a default width for cards
  },
  cardImage: {
    marginBottom: 8, // Space below the image
  },
};
