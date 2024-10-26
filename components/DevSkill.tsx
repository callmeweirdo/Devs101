import type { CardProps } from 'tamagui';
import { H2, H3, Button, Card, Image, Paragraph, XStack, YStack } from 'tamagui';

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
        {Array.from({ length: 8 }).map((_, index) => (
          <DemoCard
            key={index}
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

export function DemoCard(props: CardProps) {
  return (
    <Card elevate size="$4" bordered {...props}>
      <Card.Header padded>
        <H3>Sony A7IV</H3>
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
            width: 250,
            height: 250,
            uri: 'https://cdn.dribbble.com/userupload/5859589/file/original-55534b3895c5e6fee63696b7418eade7.png?resize=752x',
          }}
        />
      </Card.Background>
    </Card>
  );
}
