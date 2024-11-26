import { Button, Card, H2, Image, Paragraph, ScrollView, XStack, YStack } from 'tamagui';
import { Link } from 'expo-router';
import React from 'react';



// DevsProfileCards Component
export function DevsCardProfiles() {
  const devsData = [
    { title: 'Dev101', description: 'Now available', imageUri: 'https://image.pngaaa.com/743/6496743-middle.png' },
    { title: 'Dev102', description: 'Available soon', imageUri: 'https://image.pngaaa.com/743/6496743-middle.png' },
    { title: 'Dev103', description: 'Limited slots', imageUri: 'https://image.pngaaa.com/743/6496743-middle.png' },
    { title: 'Dev104', description: 'Now available', imageUri: 'https://image.pngaaa.com/743/6496743-middle.png' },
    { title: 'Dev105', description: 'Coming soon', imageUri: 'https://image.pngaaa.com/743/6496743-middle.png' },
    { title: 'Dev106', description: 'Now available', imageUri: 'https://image.pngaaa.com/743/6496743-middle.png' },
  ];

  return (
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
  );
}

// DevsCards Component
export function DevsCards({ title, description, imageUri, ...props }) {
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

// ResponsiveGrid Component
export function ResponsiveGrid({ children }) {
  return (
    <XStack
      justifyContent="center"
      flexWrap="wrap"
      paddingHorizontal="$2"
      paddingVertical="$4"
      space="$4"
    >
      {children}
    </XStack>
  );
}

// Styles for cards
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
