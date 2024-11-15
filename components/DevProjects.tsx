import type { CardProps } from 'tamagui';
import { H2, H3, Button, Card, Image, Paragraph, XStack, YStack } from 'tamagui';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useUser } from '@clerk/clerk-react';

type Project = {
  name: string;
  description: string;
  imageUri: string;
  link: string;
};

export function DevProjects() {
  const { user } = useUser();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (user) {
      const userProjects = user.unsafeMetadata?.projects as Project[] | undefined;
      if (userProjects) {
        setProjects(userProjects);
      }
    }
  }, [user]);

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
        alignItems="center"
        style={{ width: '100%' }}
        space="$3"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            animation="bouncy"
            size="$4"
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            width="100%"
            $sm={{ width: '100%', height: 300 }}
            $md={{ width: '48%', height: 300 }}
            $lg={{ width: '32%', height: 300 }}
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
        <Button
          marginTop="$2"
          borderRadius="$10"
          size="$3"
          theme="blue"
          onPress={() => window.open(project.link, '_blank')}
        >
          View Project
        </Button>
      </Card.Footer>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    marginBottom: 8,
  },
  cardFooter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
