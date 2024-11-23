import React, { useEffect, useState } from 'react';
import { Button, Card, H2, Image, Paragraph, XStack } from 'tamagui';
import { Link } from 'expo-router';

export function DevsCardProfiles() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/getUsers'); // Adjust the API URL as needed
        if (!response.ok) throw new Error('Failed to fetch users');
        const users = await response.json();
        setUsersData(users);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching users from API:', error);
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
          title={user.name}
          description={user.email}
          imageUri={user.avatar}
        />
      ))}
    </ResponsiveGrid>
  );
}

export function DevsCards({ id, title, description, imageUri }) {
  return (
    <Link href={`/developer/${id}`}>
      <Card style={styles.cardContainer}>
        <Card.Header padded>
          <H2 textAlign="center">{title}</H2>
          <Paragraph textAlign="center">{description}</Paragraph>
        </Card.Header>
        <Card.Background>
          <Image resizeMode="contain" source={{ uri: imageUri }} style={styles.cardImage} />
        </Card.Background>
        <Card.Footer padded>
          <XStack justifyContent="center">
            <Button>View Profile</Button>
          </XStack>
        </Card.Footer>
      </Card>
    </Link>
  );
}

export function ResponsiveGrid({ children }) {
  return <XStack justifyContent="center" flexWrap="wrap" space="$4">{children}</XStack>;
}

const styles = {
  cardContainer: {
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  cardImage: {
    height: 200,
  },
};
