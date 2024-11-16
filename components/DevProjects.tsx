import { Button, Card, H2, Image, Paragraph, ScrollView, XStack, YStack } from 'tamagui';
import { Link } from 'expo-router';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';

// Home Component
const DevsProjectCard = () => {
  return (
    <YStack flex={1} backgroundColor="$background" padding="$4" borderRadius="$4">
      {/* Static Title */}
      <H2 textAlign="center" color="$color" paddingVertical="$4">
        My Projects
      </H2>

      {/* Scrollable Cards Section */}
      {/* <ScrollView> */}
        <DevsProjectsCards />
      {/* </ScrollView> */}
    </YStack>
  );
};

export default DevsProjectCard;

// DevsProjectCards Component
export function DevsProjectsCards() {
  const { user } = useUser();

  // Fetch projects from Clerk's unsafe metadata
  const devsProjectData = user?.unsafeMetadata?.projects || [];

  return (
    <ResponsiveGrid>
      {devsProjectData.map((dev, index) => (
        <DevsCards
          key={index}
          name={dev.name}
          description={dev.description}
          imageUrl={dev.imageUrl}
          link={dev.link}
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
export function DevsCards({ name, description, imageUrl, link, ...props }) {
  const devTitle = name ? name.toLowerCase() : 'untitled';

  return (
    <Link href={link}>
      <Card
        elevate
        size="$10"
        bordered
        {...props}
        style={styles.cardContainer}
      >
        <Card.Header padded>
          <H2 textAlign="center">{name || 'Untitled'}</H2> {/* Display 'Untitled' if name is undefined */}
          <Paragraph theme="alt2" textAlign="center">{description}</Paragraph>
        </Card.Header>
        <Card.Background>
          <Image
            resizeMode="contain"
            alignSelf="center"
            source={{
              width: 250,
              height: 250,
              uri: imageUrl,
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

// ResponsiveGrid Component without MediaQuery
export function ResponsiveGrid({ children }) {
  return (
    <XStack
      justifyContent="center"
      flexWrap="wrap"
      paddingHorizontal="$2"
      paddingVertical="$4"
      space="$4"
    >
      {children.map((child, index) => (
        <YStack
          key={index}
          width="100%"
          $gtLg={{ width: '23%' }}  // 4 cards per row for extra-large screens
          $lg={{ width: '30%' }}    // 3 cards per row for large screens
          $md={{ width: '30%' }}    // 3 cards per row for medium screens
          $sm={{ width: '45%' }}    // 2 cards per row for small screens
          $xs={{ width: '100%' }}   // 1 card per row for extra-small screens
        >
          {child}
        </YStack>
      ))}
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
