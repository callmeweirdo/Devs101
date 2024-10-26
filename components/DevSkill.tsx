import type { CardProps } from 'tamagui';
import { Button, Card, H2, Image, Paragraph, XStack } from 'tamagui';

export function DevSkill() {
  return (
    <XStack
      flexWrap="wrap"
      justifyContent="center"
      style={{ height: '60%' }}
      paddingHorizontal="$4"
      space
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <DemoCard
          key={index}
          animation="bouncy"
          size="$4"
          width="100%"
          scale={0.9}
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
          $sm={{ width: '90%', height: 300 }}
          $md={{ width: '45%', height: 300 }}
          $lg={{ width: '23%', height: 300 }}  // For large screens
          $xl={{ width: '23%', height: 300 }}  // For extra-large screens and above
        />
      ))}
    </XStack>
  );
}

export function DemoCard(props: CardProps) {
  return (
    <Card elevate size="$4" bordered {...props}>
      <Card.Header padded>
        <H2>Sony A7IV</H2>
        <Paragraph theme="alt2">Now available</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$10">Purchase</Button>
      </Card.Footer>
      <Card.Background>
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
            width: 300,
            height: 300,
            uri: 'https://cdn.dribbble.com/userupload/5859589/file/original-55534b3895c5e6fee63696b7418eade7.png?resize=752x',
          }}
        />
      </Card.Background>
    </Card>
  );
}
