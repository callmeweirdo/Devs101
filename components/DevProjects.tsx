import type { CardProps } from 'tamagui';
import { H2, H3, Button, Card, Image, Paragraph, XStack, YStack } from 'tamagui';
import React from 'react';
import { StyleSheet } from 'react-native';

type Project = {
  name: string;
  description: string;
  imageUri: string;
  link: string; // Link to the project
};

const projects: Project[] = [
  {
    name: 'My Portfolio Website',
    description: 'A personal portfolio showcasing my projects and skills.',
    imageUri: 'https://via.placeholder.com/150',
    link: 'https://myportfolio.com',
  },
  {
    name: 'E-commerce App',
    description: 'A full-featured e-commerce application with user authentication.',
    imageUri: 'https://via.placeholder.com/150',
    link: 'https://ecommerceapp.com',
  },
  {
    name: 'Blockchain Voting System',
    description: 'A decentralized voting system using blockchain technology.',
    imageUri: 'https://via.placeholder.com/150',
    link: 'https://votingsystem.com',
  },
  {
    name: 'Chat Application',
    description: 'Real-time chat application built with React and Firebase.',
    imageUri: 'https://via.placeholder.com/150',
    link: 'https://chatapp.com',
  },{
    name: 'Chat Application',
    description: 'Real-time chat application built with React and Firebase.',
    imageUri: 'https://via.placeholder.com/150',
    link: 'https://chatapp.com',
  },{
    name: 'Chat Application',
    description: 'Real-time chat application built with React and Firebase.',
    imageUri: 'https://via.placeholder.com/150',
    link: 'https://chatapp.com',
  },{
    name: 'Chat Application',
    description: 'Real-time chat application built with React and Firebase.',
    imageUri: 'https://via.placeholder.com/150',
    link: 'https://chatapp.com',
  },{
    name: 'Chat Application',
    description: 'Real-time chat application built with React and Firebase.',
    imageUri: 'https://via.placeholder.com/150',
    link: 'https://chatapp.com',
  },
];

export function DevProjects() {
  return (
    <YStack space="$4" alignItems="center" paddingHorizontal="$4" paddingVertical="$6">
      {/* Title Section */}
      <H2 textAlign="center" color="$color" paddingBottom="$4">
        Projects Showcase
      </H2>

      {/* Cards Container */}
      <XStack
        flexWrap="wrap"
        justifyContent="center"
        style={{ height: '100%' }}
        space
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            animation="bouncy"
            size="$4"
            width="100%"
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            $sm={{ width: '90%', height: 300 }}
            $md={{ width: '45%', height: 300 }}
            $lg={{ width: '23%', height: 300 }}
            $xl={{ width: '23%', height: 300 }}
          />
        ))}
      </XStack>
    </YStack>
  );
}

interface ProjectCardProps extends CardProps {
  project: Project;
}

export function ProjectCard({ project, ...props }: ProjectCardProps) {
  return (
    <Card style={styles.cardContainer} elevate size="$4" bordered {...props}>
      <Card.Header padded style={styles.cardHeader}>
        <H3>{project.name}</H3>
        <Paragraph theme="alt2">{project.description}</Paragraph>
      </Card.Header>

      <Card.Background style={styles.cardImageContainer}>
        <Image
          resizeMode="contain"
          source={{
            width: 150,
            height: 150,
            uri: project.imageUri,
          }}
          style={styles.cardImage}
        />
      </Card.Background>

      <Card.Footer padded style={styles.cardFooter}>
        <Button marginTop="$2" borderRadius="$10" size="$3" theme="blue" onPress={() => window.open(project.link, '_blank')}>
          View Project
        </Button>
      </Card.Footer>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20, // Rounded corners
    overflow: 'hidden', // Ensures rounded corners work for all content inside the card
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    textAlign: 'center', // Center text
  },
  cardHeader: {
    alignItems: 'center', // Center header content
    justifyContent: 'center', // Center header content
  },
  cardImageContainer: {
    alignItems: 'center', // Center image container
    justifyContent: 'center', // Center image container
  },
  cardImage: {
    marginBottom: 8, // Space below the image
  },
  cardFooter: {
    alignItems: 'center', // Center footer content
    justifyContent: 'center', // Center footer content
  },
});
