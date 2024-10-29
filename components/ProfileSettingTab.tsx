import React from 'react';
import type { TabsContentProps } from 'tamagui';
import { Button, SizableText, Separator, Tabs, YStack, XStack } from 'tamagui';

const ProfileSettingTab = () => {
  return (
    <YStack alignItems="center" justifyContent="center" padding="$4" flex={1}>
      <Tabs
        defaultValue="profile"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
        maxWidth={700}
        height="auto"
        borderRadius="$4"
        borderWidth="$0.25"
        overflow="hidden"
        borderColor="$borderColor"
      >
        <Tabs.List
          separator={<Separator vertical />}
          disablePassBorderRadius="bottom"
          aria-label="Edit your profile"
          justifyContent="center"
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
          <Tabs.Tab flex={1} value="contact">
            <SizableText fontFamily="$body">Contact</SizableText>
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

        <TabContent value="contact">
          <ContactEditForm />
        </TabContent>
      </Tabs>
    </YStack>
  );
};

const TabContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
      padding="$3"
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
  );
};

// Profile Information Form
const ProfileEditForm = () => {
  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Profile Information</SizableText>
      <YStack>
        <SizableText>Name</SizableText>
        <input type="text" placeholder="Enter your name" style={{ padding: 8, width: '100%' }} />
      </YStack>
      <YStack>
        <SizableText>Location</SizableText>
        <input type="text" placeholder="Enter your location" style={{ padding: 8, width: '100%' }} />
      </YStack>
      <YStack>
        <SizableText>Bio</SizableText>
        <textarea placeholder="A short bio about yourself" style={{ padding: 8, width: '100%', height: 80 }} />
      </YStack>
      <YStack>
        <SizableText>Profile Photo URL</SizableText>
        <input type="url" placeholder="Link to your profile photo" style={{ padding: 8, width: '100%' }} />
      </YStack>
      <Button width="100%">Save Profile</Button>
    </YStack>
  );
};

// Skills Form
const SkillsEditForm = () => {
  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Skills</SizableText>
      <YStack>
        <SizableText>Skill Name</SizableText>
        <input type="text" placeholder="Enter a skill" style={{ padding: 8, width: '100%' }} />
      </YStack>
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
  );
};

// Projects Form
const ProjectsEditForm = () => {
  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Projects</SizableText>
      <YStack>
        <SizableText>Project Title</SizableText>
        <input type="text" placeholder="Enter project title" style={{ padding: 8, width: '100%' }} />
      </YStack>
      <YStack>
        <SizableText>Description</SizableText>
        <textarea placeholder="Describe your project" style={{ padding: 8, width: '100%', height: 80 }} />
      </YStack>
      <YStack>
        <SizableText>Project Cover Photo URL</SizableText>
        <input type="url" placeholder="Link to cover photo" style={{ padding: 8, width: '100%' }} />
      </YStack>
      <Button width="100%">Save Project</Button>
    </YStack>
  );
};

// Contact Form
const ContactEditForm = () => {
  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Contact Information</SizableText>
      <YStack>
        <SizableText>LinkedIn</SizableText>
        <input type="url" placeholder="LinkedIn Profile URL" style={{ padding: 8, width: '100%' }} />
      </YStack>
      <YStack>
        <SizableText>GitHub</SizableText>
        <input type="url" placeholder="GitHub Profile URL" style={{ padding: 8, width: '100%' }} />
      </YStack>
      <YStack>
        <SizableText>Twitter</SizableText>
        <input type="url" placeholder="Twitter Profile URL" style={{ padding: 8, width: '100%' }} />
      </YStack>
      <Button width="100%">Save Contact Info</Button>
    </YStack>
  );
};

export default ProfileSettingTab;
