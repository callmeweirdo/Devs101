import React from 'react'
import type { TabsContentProps } from 'tamagui'
import { Button, H5, Separator, SizableText, Tabs, XStack, YStack, isWeb } from 'tamagui'
import { SignInWithGitHubButton, SignInWithGoogleButton, SignInWithLinkedInButton } from './AuthButtons'

const demos = ['horizontal', 'vertical'] as const
const demosTitle: Record<(typeof demos)[number], string> = {
  horizontal: 'Horizontal',
  vertical: 'Vertical',
}

const LoginTab = () => {
  return (
    <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      width={700}
      height={400}
      borderRadius="$4"
      borderWidth="$0.25"
      overflow="hidden"
      borderColor="$borderColor"
    >
      <Tabs.List
        separator={<Separator vertical />}
        disablePassBorderRadius="bottom"
        aria-label="Manage your account"
      >
        <Tabs.Tab flex={1} value="tab1">
          <SizableText fontFamily="$body">Sign In</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab2">
          <SizableText fontFamily="$body">Sign Up</SizableText>
        </Tabs.Tab>
        
      </Tabs.List>
      <Separator />
      <TabsContent value="tab1">
        <YStack padding="$3" gap="$3" >
          <SignInWithGoogleButton buttonStyle={{ size: "$5", width: "250px" }} />
          <SignInWithGitHubButton buttonStyle={{ size: "$5", width: "250px" }} />
          <SignInWithLinkedInButton buttonStyle={{ size: "$5", width: "250px" }} />
        </YStack>
      </TabsContent>

      <TabsContent value="tab2">
        <YStack padding="$3" gap="$3" >
          <Button size="$5" width="250px" >Sign Up with Google</Button>
          <Button size="$5" width="250px" >Sign Up with Github</Button>
          <Button size="$5" width="250px" >Sign Up with LinkdIn</Button>
        </YStack>
      </TabsContent>

      
    </Tabs>
  )
}



const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
      key="tab3"
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      borderRadius="$2"
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      borderWidth="$2"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  )
}

export default LoginTab;