import type { CardProps } from 'tamagui';
import { Button, Card, H2, Image, Paragraph, XStack, YStack } from 'tamagui';
import { Link, useRouter } from 'expo-router';
import React from 'react';

export function CardDemo() {
  const router = useRouter();
  
  return (
    <ResponsiveGrid>
      {/* Multiple DevsCards can be added here */}
      <DevsCards
        animation="bouncy"
        size="$5"
        width={250}
        height={300}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
      />
      <DevsCards
        animation="bouncy"
        size="$5"
        width={250}
        height={300}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
      />
      <DevsCards
        animation="bouncy"
        size="$5"
        width={250}
        height={300}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
      />
      {/* Add more cards as needed */}
    </ResponsiveGrid>
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
          <XStack flex={1} justifyContent="center">
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
    <YStack
      justifyContent="center"
      flexWrap="wrap" // Makes items wrap in a row
      paddingHorizontal="$4"
      paddingVertical="$4"
      space="$4"
    >
      <XStack
        justifyContent="center"
        flexWrap="wrap" // Makes items wrap in a row
        space="$4"
        $xl={{ width: '33.33%' }}  // 3 cards per row
        $lg={{ width: '50%' }}     // 2 cards per row on medium screens
        $md={{ width: '50%' }}     // 2 cards per row
        $sm={{ width: '100%' }}     // 1 card per row on small/mobile screens
      >
        {children}
      </XStack>
    </YStack>
  );
}

const styles = {
  cardContainer: {
    margin: '5px',
    borderRadius: 15, // Rounded corners for cards
  },
  cardImage: {
    marginBottom: 8, // Space below the image
  },
};
