import type { CardProps } from 'tamagui';
import { H2, H3, Button, Card, Image, Paragraph, Progress, XStack, YStack } from 'tamagui';
import React from 'react';
import { StyleSheet } from 'react-native';

type Skill = {
  name: string;
  description: string;
  imageUri: string;
  proficiency: number; // Represented as a percentage
};

const skills: Skill[] = [
  {
    name: 'JavaScript',
    description: 'Advanced in ES6+, asynchronous programming, and frameworks like React.',
    imageUri: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    proficiency: 90,
  },
  {
    name: 'React Native',
    description: 'Experienced in building cross-platform mobile applications.',
    imageUri: 'https://cdn-icons-png.flaticon.com/512/3334/3334886.png',
    proficiency: 80,
  },
  {
    name: 'Blockchain',
    description: 'Skilled in developing and deploying smart contracts with Solidity.',
    imageUri: 'https://cdn-icons-png.flaticon.com/512/197/197600.png',
    proficiency: 70,
  },
  {
    name: 'Git & GitHub',
    description: 'Proficient in version control, collaboration, and Git workflows.',
    imageUri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    proficiency: 85,
  },
  {
    name: 'Node.js',
    description: 'Backend development with Express.js, REST APIs, and database integration.',
    imageUri: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
    proficiency: 75,
  },
  {
    name: 'Web3',
    description: 'Knowledge of Web3.js and blockchain-based applications.',
    imageUri: 'https://cdn-icons-png.flaticon.com/512/876/876784.png',
    proficiency: 65,
  },
  {
    name: 'UI/UX Design',
    description: 'Creating user-friendly interfaces with Figma and Adobe XD.',
    imageUri: 'https://cdn-icons-png.flaticon.com/512/888/888887.png',
    proficiency: 60,
  },
  {
    name: 'Docker',
    description: 'Containerization for application deployment and scaling.',
    imageUri: 'https://cdn-icons-png.flaticon.com/512/919/919853.png',
    proficiency: 70,
  },
];

export function DevSkill() {
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
        style={{ height: '60%' }}
        space
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            skill={skill}
            animation="bouncy"
            size="$4"
            width="100%"
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            $sm={{ width: '90%', height: 270 }}
            $md={{ width: '45%', height: 270 }}
            $lg={{ width: '23%', height: 270 }}
            $xl={{ width: '23%', height: 270 }}
          />
        ))}
      </XStack>
    </YStack>
  );
}

interface SkillCardProps extends CardProps {
  skill: Skill;
}

export function SkillCard({ skill, ...props }: SkillCardProps) {
  return (
    <Card style={styles.cardContainer} elevate size="$4" bordered {...props}>
      <Card.Header padded style={styles.cardHeader}>
        <H3>{skill.name}</H3>
        <Paragraph theme="alt2">{skill.description}</Paragraph>
      </Card.Header>

      <Card.Background style={styles.cardImageContainer}>
        <Image
          resizeMode="contain"
          source={{
            width: 80,
            height: 80,
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
    borderRadius: 50, // Rounded corners
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
  footerContent: {
    width: '100%', // Ensure footer content takes full width
    justifyContent: 'space-between', // Space between proficiency text and progress bar
  },
});
