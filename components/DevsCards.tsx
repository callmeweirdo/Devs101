import type { CardProps } from 'tamagui'
import { Button, Card, H2, Image, Paragraph, Text, XStack, YStack } from 'tamagui';
import { Link, useRouter } from 'expo-router';
import { Pressable } from 'react-native';

export function CardDemo() {
    const router = useRouter();
  return (
    <ResponsiveGrid>
      {/* You can add multiple DevsCards like below */}
      <DevsCards
        animation="bouncy"
        size="$5"
        width={250}
        height={300}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
      />
    </ResponsiveGrid>
  )
}

export function DevsCards(props: CardProps) {
    return (
        <Link href={{ pathname: "/(devs)/[dev]", params: { dev: "devvvvv" } }} >
        <Card elevate size="$4" bordered {...props} style={{ margin: "5px" }}>
      <Card.Header padded>
        <H2>Dev101</H2>"/(devs)/[dev]"
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
            uri: 'https://image.pngaaa.com/743/6496743-middle.png',
          }}
        />
      </Card.Background>
            </Card>
            </Link>
  )
}

// Create a responsive grid system component
export function ResponsiveGrid({ children }: { children: React.ReactNode }) {
  return (
    <XStack
      justifyContent="center"
      flexWrap="wrap" // Makes items wrap in a row
      space="$4"
    //   $sm={{ flexDirection: 'column', alignItems: 'center' }} // Stacks the cards in one column for small screens
      paddingHorizontal="$4"
          paddingVertical="$4"
          
      // Using breakpoints for responsive grid layout
    //   $xxl={{ width: '33.33%' }} // 3 cards per row on large screens
      $xl={{ width: '33.33%' }}  // 3 cards per row
      $lg={{ width: '50%' }}     // 2 cards per row on medium screens
      $md={{ width: '50%' }}     // 2 cards per row
      $sm={{ width: '100%', flexDirection: 'column' }}  // 1 card per row on small/mobile screens
    >
      {children}
    </XStack>
  )
}
