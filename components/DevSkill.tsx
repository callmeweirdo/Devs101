import type { CardProps } from 'tamagui'
import { Button, Card, H2, Image, Paragraph, XStack } from 'tamagui'

export function DevSkill() {
  return (
    <XStack $sm={{ flexDirection: 'column' }} style={{ height: "100%" }} paddingHorizontal="$4" space>
      <DemoCard
        animation="bouncy"
        size="$4"
        width={250}
        height={300}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
      />
    </XStack>
  )
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
            uri: "https://cdn.dribbble.com/userupload/5859589/file/original-55534b3895c5e6fee63696b7418eade7.png?resize=752x"
          }}
        />
      </Card.Background>
    </Card>
  )
}