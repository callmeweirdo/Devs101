import React from 'react'
import type { TabsContentProps } from 'tamagui'
import { Button, SizableText, Separator, Tabs, YStack, XStack } from 'tamagui'

const ProfileSettingTab = () => {
  return (
    <Tabs
      defaultValue="profile"
      orientation="horizontal"
      flexDirection="column"
      width={700}
      height={500}
      borderRadius="$4"
      borderWidth="$0.25"
      overflow="hidden"
      borderColor="$borderColor"
    >
      <Tabs.List
        separator={<Separator vertical />}
        disablePassBorderRadius="bottom"
        aria-label="Edit your profile"
      >
        <Tabs.Tab flex={1} value="profile">
          <SizableText fontFamily="$body">Profile</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="skills">
          <SizableText fontFamily="$body">Skills</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="projects">
          <SizableText fontFamily="$body">Projects</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      <Separator />
      
      <TabContent value="profile">
        <ProfileEditForm />
      </TabContent>

      <TabContent value="skills">
        <SkillsEditForm />
      </TabContent>

      <TabContent value="projects">
        <ProjectsEditForm />
      </TabContent>
    </Tabs>
  )
}

const TabContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
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

// Example form for editing profile information
const ProfileEditForm = () => {
  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Profile Information</SizableText>
      {/* Name Field */}
      <YStack>
        <SizableText>Name</SizableText>
        <input type="text" placeholder="Enter your name" style={{ padding: 8, width: '100%' }} />
      </YStack>
      {/* Location Field */}
      <YStack>
        <SizableText>Location</SizableText>
        <input type="text" placeholder="Enter your location" style={{ padding: 8, width: '100%' }} />
      </YStack>
      {/* Bio Field */}
      <YStack>
        <SizableText>Bio</SizableText>
        <textarea placeholder="A short bio about yourself" style={{ padding: 8, width: '100%', height: 80 }} />
      </YStack>
      <Button width="100%">Save Profile</Button>
    </YStack>
  )
}

// Example form for editing skills
const SkillsEditForm = () => {
  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Skills</SizableText>
      {/* Skill Field */}
      <YStack>
        <SizableText>Skill Name</SizableText>
        <input type="text" placeholder="Enter a skill" style={{ padding: 8, width: '100%' }} />
      </YStack>
      {/* Proficiency Level */}
      <YStack>
        <SizableText>Proficiency Level</SizableText>
        <select style={{ padding: 8, width: '100%' }}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Expert</option>
        </select>
      </YStack>
      <Button width="100%">Save Skills</Button>
    </YStack>
  )
}

// Example form for editing projects
const ProjectsEditForm = () => {
  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Projects</SizableText>
      {/* Project Title Field */}
      <YStack>
        <SizableText>Project Title</SizableText>
        <input type="text" placeholder="Enter project title" style={{ padding: 8, width: '100%' }} />
      </YStack>
      {/* Project Description Field */}
      <YStack>
        <SizableText>Description</SizableText>
        <textarea placeholder="Describe your project" style={{ padding: 8, width: '100%', height: 80 }} />
      </YStack>
      {/* Project Link */}
      <YStack>
        <SizableText>Project Link</SizableText>
        <input type="url" placeholder="Link to project" style={{ padding: 8, width: '100%' }} />
      </YStack>
      <Button width="100%">Save Project</Button>
    </YStack>
  )
}

export default ProfileSettingTab;
