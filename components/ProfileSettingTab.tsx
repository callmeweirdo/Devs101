import React, { useCallback } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import { useUserProfileStore } from 'stores/userProfileStore';
import { useSkillsStore } from 'stores/skillsStore';
import { useProjectsStore } from 'stores/projectsStore';
import { useContactStore } from 'stores/contactStore';
import { Button, SizableText, Separator, Tabs, YStack } from 'tamagui';
import { clerkClient } from '@clerk/clerk-react';
import { useLocalSearchParams } from 'expo-router';

const fetchUserMetadata = async (userId: string) => {
  const user = await clerkClient.users.getUser(userId);
  return user;
};

const ProfileSettingTab: React.FC = () => {
  const { userId } = useLocalSearchParams<{ dev: string }>();
  const { fetchUserProfile, setUserProfile } = useUserProfileStore();
  const { fetchSkills, setSkills } = useSkillsStore();
  const { fetchProjects, setProjects } = useProjectsStore();
  const { fetchContactInfo, setContactInfo } = useContactStore();

  useIsomorphicLayoutEffect(() => {
    if (userId) {
      fetchUserProfile(userId);
      fetchSkills(userId);
      fetchProjects(userId);
      fetchContactInfo(userId);
    }
  }, [userId, fetchUserProfile, fetchSkills, fetchProjects, fetchContactInfo]);

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
          aria-label="Edit your profile"
          justifyContent="center"
        >
          {['profile', 'skills', 'projects', 'contact'].map((tab) => (
            <Tabs.Tab key={tab} flex={1} value={tab}>
              <SizableText fontFamily="$body">{tab.charAt(0).toUpperCase() + tab.slice(1)}</SizableText>
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <Separator />

        <Tabs.Content value="profile">
          <ProfileEditForm />
        </Tabs.Content>

        <Tabs.Content value="skills">
          <SkillsEditForm />
        </Tabs.Content>

        <Tabs.Content value="projects">
          <ProjectsEditForm />
        </Tabs.Content>

        <Tabs.Content value="contact">
          <ContactEditForm />
        </Tabs.Content>
      </Tabs>
    </YStack>
  );
};

// Profile Edit Form
const ProfileEditForm: React.FC = () => {
  const { userProfile, updateUserProfile } = useUserProfileStore();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const newProfile = {
        name: formData.get('name') as string,
        location: formData.get('location') as string,
        bio: formData.get('bio') as string,
        profilePhotoUrl: formData.get('profilePhotoUrl') as string,
      };
      updateUserProfile(userProfile.id, newProfile);
    },
    [userProfile.id, updateUserProfile]
  );

  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Profile Information</SizableText>
      <form onSubmit={handleSubmit}>
        {['name', 'location', 'bio', 'profilePhotoUrl'].map((field) => (
          <YStack key={field}>
            <SizableText>{field.charAt(0).toUpperCase() + field.slice(1)}</SizableText>
            <input
              type={field === 'profilePhotoUrl' ? 'url' : 'text'}
              name={field}
              defaultValue={userProfile?.[field] || ''}
              placeholder={`Enter your ${field}`}
              style={{ padding: 8, width: '100%' }}
            />
          </YStack>
        ))}
        <Button width="100%" type="submit">
          Save Profile
        </Button>
      </form>
    </YStack>
  );
};

// Skills Edit Form
const SkillsEditForm: React.FC = () => {
  const { skills, updateSkills } = useSkillsStore();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const skill = formData.get('skill') as string;
      const proficiency = formData.get('proficiency') as string;
      updateSkills([...skills, { skill, proficiency }]);
    },
    [skills, updateSkills]
  );

  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Skills</SizableText>
      <form onSubmit={handleSubmit}>
        {['skill', 'proficiency'].map((field) => (
          <YStack key={field}>
            <SizableText>{field.charAt(0).toUpperCase() + field.slice(1)}</SizableText>
            <input
              type="text"
              name={field}
              placeholder={`Enter ${field}`}
              style={{ padding: 8, width: '100%' }}
            />
          </YStack>
        ))}
        <Button width="100%" type="submit">
          Add Skill
        </Button>
      </form>
    </YStack>
  );
};

// Projects Edit Form
const ProjectsEditForm: React.FC = () => {
  const { projects, updateProjects } = useProjectsStore();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const name = formData.get('projectName') as string;
      const link = formData.get('projectLink') as string;
      updateProjects([...projects, { name, link }]);
    },
    [projects, updateProjects]
  );

  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Projects</SizableText>
      <form onSubmit={handleSubmit}>
        {['projectName', 'projectLink'].map((field) => (
          <YStack key={field}>
            <SizableText>{field.replace('project', '').trim()}</SizableText>
            <input
              type={field === 'projectLink' ? 'url' : 'text'}
              name={field}
              placeholder={`Enter ${field}`}
              style={{ padding: 8, width: '100%' }}
            />
          </YStack>
        ))}
        <Button width="100%" type="submit">
          Add Project
        </Button>
      </form>
    </YStack>
  );
};

// Contact Edit Form
const ContactEditForm: React.FC = () => {
  const { contactInfo, updateContactInfo } = useContactStore();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const newContactInfo = {
        twitter: formData.get('twitter') as string,
        linkedIn: formData.get('linkedIn') as string,
        email: formData.get('email') as string,
      };
      updateContactInfo(newContactInfo);
    },
    [updateContactInfo]
  );

  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Contact Information</SizableText>
      <form onSubmit={handleSubmit}>
        {['twitter', 'linkedIn', 'email'].map((field) => (
          <YStack key={field}>
            <SizableText>{field.charAt(0).toUpperCase() + field.slice(1)}</SizableText>
            <input
              type={field === 'email' ? 'email' : 'url'}
              name={field}
              defaultValue={contactInfo?.[field] || ''}
              placeholder={`Enter ${field}`}
              style={{ padding: 8, width: '100%' }}
            />
          </YStack>
        ))}
        <Button width="100%" type="submit">
          Save Contact Info
        </Button>
      </form>
    </YStack>
  );
};

export default ProfileSettingTab;
