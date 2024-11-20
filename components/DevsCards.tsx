import React, { useEffect, useState } from 'react';
import { Button, Card, H2, Image, Paragraph, XStack } from 'tamagui';
import { Link } from 'expo-router';
import { clerkClient } from '@clerk/clerk-expo'; // Ensure this is properly configured

// DevsProfileCards Component
export function DevsCardProfiles() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await clerkClient().users.getUserList(); // Fetch users from Clerk
        const formattedUsers = users.map(user => ({
          id: user.id, // Clerk user ID
          title: user.username || `${user.firstName || 'Anonymous'} ${user.lastName || ''}`,
          description: user.emailAddresses?.[0]?.emailAddress || 'No email available',
          imageUri: user.profileImageUrl || 'https://via.placeholder.com/250',
        }));
        setUsersData(formattedUsers);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching users from Clerk:', error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <Paragraph>Loading...</Paragraph>;
  }

  return (
    <ResponsiveGrid>
      {usersData.map(user => (
        <DevsCards
          key={user.id}
          id={user.id}
          title={user.title}
          description={user.description}
          imageUri={user.imageUri}
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
export function DevsCards({ id, title, description, imageUri, ...props }) {
  return (
    <Link href={{ pathname: `/developer/${id}` }}>
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
            <Button borderRadius="$10">View Profile</Button>
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
