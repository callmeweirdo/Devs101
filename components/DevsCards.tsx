import type { CardProps } from 'tamagui';
import { Button, Card, H2, Image, Paragraph, XStack, YStack } from 'tamagui';
import { Link } from 'expo-router';
import React from 'react';

export function CardDemo() {
  const devsData = [
    { title: 'Dev101', description: 'Now available', imageUri: 'https://image.pngaaa.com/743/6496743-middle.png' },
    { title: 'Dev102', description: 'Available soon', imageUri: 'https://image.pngaaa.com/743/6496743-middle.png' },
    { title: 'Dev103', description: 'Limited slots', imageUri: 'https://image.pngaaa.com/743/6496743-middle.png' },
    { title: 'Dev104', description: 'Now available', imageUri: 'https://image.pngaaa.com/743/6496743-middle.png' },
    { title: 'Dev105', description: 'Coming soon', imageUri: 'https://image.pngaaa.com/743/6496743-middle.png' },
    { title: 'Dev106', description: 'Now available', imageUri: 'https://image.pngaaa.com/743/6496743-middle.png' },
  ];

  return (
    <YStack space="$4" alignItems="center" paddingHorizontal="$4" paddingVertical="$6">
      <ResponsiveGrid>
        {devsData.map((dev, index) => (
          <DevsCards
            key={index}
            title={dev.title}
            description={dev.description}
            imageUri={dev.imageUri}
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

export function DevsCards({ title, description, imageUri, ...props }: CardProps & { title: string; description: string; imageUri: string }) {
  return (
    <Link href={{ pathname: "/[dev]/", params: { dev: title.toLowerCase() } }}>
      <Card
        elevate
        size="$4"
        bordered
        {...props}
        style={styles.cardContainer}
      >
        <Card.Header padded>
          <H2 textAlign="center">{title}</H2>
          <Paragraph theme="alt2" textAlign="center">{description}</Paragraph>
        </Card.Header>
        <Card.Background>
          <Image
            resizeMode="contain"
            alignSelf="center"
            source={{
              width: 250,
              height: 250,
              uri: imageUri,
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

export function ResponsiveGrid({ children }: { children: React.ReactNode }) {
  return (
    <XStack
      justifyContent="center"
      flexWrap="wrap"
      paddingHorizontal="$2"
      paddingVertical="$4"
      space="$4"
      $gtLg={{ width: '23%' }}  // 4 cards per row for extra-large screens
      $lg={{ width: '30%' }}    // 3 cards per row for large screens
      $md={{ width: '45%' }}    // 2 cards per row for medium screens
      $sm={{ width: '100%' }}   // 1 card per row for small screens
      $xs={{ width: '100%' }}   // 1 card per row for extra-small screens
    >
      {children}
    </XStack>
  );
}

const styles = {
  cardContainer: {
    margin: 10, // Space between cards
    borderRadius: 15, // Rounded corners for cards
    overflow: 'hidden', // Ensures rounded corners for all content inside the card
    width: '100%', // Default full-width for cards
  },
  cardImage: {
    marginVertical: 8, // Vertical space around the image
  },
};
