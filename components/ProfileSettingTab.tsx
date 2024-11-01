import React, { useEffect } from 'react';
import { useUserProfileStore } from 'stores/userProfileStore'; // Adjust import paths
import { useSkillsStore } from 'stores/skillsStore';
import { useProjectsStore } from 'stores/projectsStore';
import { useContactStore } from 'stores/contactStore';
import { useQuery } from '@tanstack/react-query';
import {
  Button,
  SizableText,
  Separator,
  Tabs,
  YStack,
} from 'tamagui';

const fetchUserMetadata = async (userId) => {
  const user = await clerkClient.users.getUser(userId);
  return user;
};

const ProfileSettingTab = () => {
  const userId = 'YOUR_CLI_USER_ID'; // Replace with your logic to get the user's ID

  const { fetchUserProfile, setUserProfile } = useUserProfileStore();
  const { fetchSkills, setSkills } = useSkillsStore();
  const { fetchProjects, setProjects } = useProjectsStore();
  const { fetchContactInfo, setContactInfo } = useContactStore();

  useEffect(() => {
    fetchUserProfile(userId);
    fetchSkills(userId);
    fetchProjects(userId);
    fetchContactInfo(userId);
  }, [userId]);

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
const ProfileEditForm = () => {
  const { userProfile, updateUserProfile } = useUserProfileStore();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      name: e.target.name.value,
      location: e.target.location.value,
      bio: e.target.bio.value,
      profilePhotoUrl: e.target.profilePhotoUrl.value,
    };
    updateUserProfile(userProfile.id, newProfile); // Assuming userProfile has an id
  };

  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Profile Information</SizableText>
      <form onSubmit={handleSubmit}>
        <YStack>
          <SizableText>Name</SizableText>
          <input type="text" name="name" defaultValue={userProfile?.name || ''} placeholder="Enter your name" style={{ padding: 8, width: '100%' }} />
        </YStack>
        <YStack>
          <SizableText>Location</SizableText>
          <input type="text" name="location" defaultValue={userProfile?.location || ''} placeholder="Enter your location" style={{ padding: 8, width: '100%' }} />
        </YStack>
        <YStack>
          <SizableText>Bio</SizableText>
          <textarea name="bio" defaultValue={userProfile?.privateMetadata?.bio || ''} placeholder="A short bio about yourself" style={{ padding: 8, width: '100%', height: 80 }} />
        </YStack>
        <YStack>
          <SizableText>Profile Photo URL</SizableText>
          <input type="url" name="profilePhotoUrl" defaultValue={userProfile?.privateMetadata?.profilePhotoUrl || ''} placeholder="Link to your profile photo" style={{ padding: 8, width: '100%' }} />
        </YStack>
        <Button width="100%" type="submit">Save Profile</Button>
      </form>
    </YStack>
  );
};

// Skills Edit Form
const SkillsEditForm = () => {
  const { skills, updateSkills } = useSkillsStore();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const skill = e.target.skill.value;
    const proficiency = e.target.proficiency.value;
    const updatedSkills = [...skills, { skill, proficiency }];
    updateSkills(userProfile.id, updatedSkills); // Assuming you pass the user id
  };

  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Skills</SizableText>
      <form onSubmit={handleSubmit}>
        <YStack>
          <SizableText>Skill Name</SizableText>
          <input type="text" name="skill" placeholder="Enter skill" style={{ padding: 8, width: '100%' }} />
        </YStack>
        <YStack>
          <SizableText>Proficiency Level</SizableText>
          <input type="text" name="proficiency" placeholder="Beginner/Intermediate/Expert" style={{ padding: 8, width: '100%' }} />
        </YStack>
        <Button width="100%" type="submit">Add Skill</Button>
      </form>
    </YStack>
  );
};

// Projects Edit Form
const ProjectsEditForm = () => {
  const { projects, updateProjects } = useProjectsStore();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const projectName = e.target.projectName.value;
    const projectLink = e.target.projectLink.value;
    const updatedProjects = [...projects, { name: projectName, link: projectLink }];
    updateProjects(userProfile.id, updatedProjects); // Assuming you pass the user id
  };

  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Projects</SizableText>
      <form onSubmit={handleSubmit}>
        <YStack>
          <SizableText>Project Name</SizableText>
          <input type="text" name="projectName" placeholder="Enter project name" style={{ padding: 8, width: '100%' }} />
        </YStack>
        <YStack>
          <SizableText>Project Link</SizableText>
          <input type="url" name="projectLink" placeholder="Link to your project" style={{ padding: 8, width: '100%' }} />
        </YStack>
        <Button width="100%" type="submit">Add Project</Button>
      </form>
    </YStack>
  );
};

// Contact Edit Form
const ContactEditForm = () => {
  const { contactInfo, updateContactInfo } = useContactStore();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newContactInfo = {
      twitter: e.target.twitter.value,
      linkedIn: e.target.linkedIn.value,
      email: e.target.email.value,
    };
    updateContactInfo(userProfile.id, newContactInfo); // Assuming you pass the user id
  };

  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Contact Information</SizableText>
      <form onSubmit={handleSubmit}>
        <YStack>
          <SizableText>Twitter</SizableText>
          <input type="url" name="twitter" defaultValue={contactInfo.twitter || ''} placeholder="Your Twitter profile link" style={{ padding: 8, width: '100%' }} />
        </YStack>
        <YStack>
          <SizableText>LinkedIn</SizableText>
          <input type="url" name="linkedIn" defaultValue={contactInfo.linkedIn || ''} placeholder="Your LinkedIn profile link" style={{ padding: 8, width: '100%' }} />
        </YStack>
        <YStack>
          <SizableText>Email</SizableText>
          <input type="email" name="email" defaultValue={contactInfo.email || ''} placeholder="Your email address" style={{ padding: 8, width: '100%' }} />
        </YStack>
        <Button width="100%" type="submit">Save Contact Info</Button>
      </form>
    </YStack>
  );
};

export default ProfileSettingTab;
