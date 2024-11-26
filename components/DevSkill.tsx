import { useUser } from '@clerk/clerk-expo';
import { H2, H3, Button, Card, Image, Paragraph, Progress, XStack, YStack } from 'tamagui';
import React from 'react';
import { StyleSheet } from 'react-native';

// SkillCard Component Props
type Skill = {
  name: string;
  description: string;
  imageUri: string;
  proficiency: number; // Represented as a percentage
};

interface SkillCardProps extends CardProps {
  skill: Skill;
}

// Main DevSkill Component
export function DevSkill() {
  const { user } = useUser();

  // Retrieve skills from Clerk's unsafeMetadata
  const skills: Skill[] = user?.unsafeMetadata?.skills || [];

  return (
    <YStack space="$4" alignItems="center" paddingHorizontal="$4" paddingVertical="$6">
      {/* Title Section */}
      <H2 textAlign="center" color="$color" paddingBottom="$4">
        Skills Section
      </H2>

      {/* Cards Container */}
      <XStack
        flexWrap="wrap"
        justifyContent="center"
        gap="$6" // Adds space between rows and columns
        $sm={{ width: '100%' }}
        $md={{ width: '100%' }}
        $lg={{ width: '100%' }}
        $xl={{ width: '100%' }}
      >
        {skills.length === 0 ? (
          // If no skills, display a single "No Skills" card
          <NoSkillsCard />
        ) : (
          skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              animation="bouncy"
              size="$2"
              hoverStyle={{ scale: 0.98 }}
              pressStyle={{ scale: 0.95 }}
              $sm={{ width: '100%', height: 300 }}
              $md={{ width: '48%', height: 300 }}
              $lg={{ width: '23%', height: 350 }} // 4 cards per row on large screens
              $xl={{ width: '23%', height: 350 }} // 4 cards per row on extra-large screens
            />
          ))
        )}
      </XStack>
    </YStack>
  );
}

// NoSkillsCard Component (Displays when no skills are available)
export function NoSkillsCard() {
  return (
    <Card style={styles.cardContainer} elevate size="$3" bordered>
      <Card.Header padded style={styles.cardHeader}>
        <H3>No Skills Available</H3>
        <Paragraph theme="alt2">You don't have any skills listed yet.</Paragraph>
      </Card.Header>

      <Card.Background style={styles.cardImageContainer}>
        <Image
          resizeMode="contain"
          source={{
            width: 100,
            height: 100,
            uri: 'https://via.placeholder.com/150', // Placeholder image for no skills
          }}
          style={styles.cardImage}
        />
      </Card.Background>

      <Card.Footer padded style={styles.cardFooter}>
        <XStack alignItems="center" justifyContent="center" style={styles.footerContent}>
          <Paragraph>No skills have been added to your profile yet.</Paragraph>
        </XStack>
      </Card.Footer>
    </Card>
  );
}

// SkillCard Component
export function SkillCard({ skill, ...props }: SkillCardProps) {
  return (
    <Card style={styles.cardContainer} elevate size="$3" bordered {...props}>
      <Card.Header padded style={styles.cardHeader}>
        <H3>{skill.name}</H3>
        <Paragraph theme="alt2">{skill.description}</Paragraph>
      </Card.Header>

      <Card.Background style={styles.cardImageContainer}>
        <Image
          resizeMode="contain"
          source={{
            width: 100,
            height: 100,
            uri: skill.imageUri,
          }}
          style={styles.cardImage}
        />
      </Card.Background>

      <Card.Footer padded style={styles.cardFooter}>
        <XStack alignItems="center" justifyContent="space-between" style={styles.footerContent}>
          <Paragraph>Proficiency: {skill.proficiency}%</Paragraph>
          <Progress size="small" value={skill.proficiency} />
        </XStack>
        <Button marginTop="$2" borderRadius="$10" size="$3" theme="blue">
          Learn More
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
    paddingBottom: 8,
  },
  cardImageContainer: {
    alignItems: 'center', // Center image container
    justifyContent: 'center', // Center image container
    paddingVertical: 10,
  },
  cardImage: {
    marginBottom: 8, // Space below the image
  },
  cardFooter: {
    alignItems: 'center', // Center footer content
    justifyContent: 'center', // Center footer content
  },
  footerContent: {
    width: '100%', // Ensure footer content takes full width
    justifyContent: 'space-between', // Space between proficiency text and progress bar
  },
});
