import React, { useCallback, useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Button, SizableText, Separator, Tabs, YStack } from 'tamagui';

const ProfileSettingTab: React.FC = () => {
  const { user, updateUser } = useUser();

  const [userProfile, setUserProfile] = useState({
    name: '',
    location: '',
    bio: '',
    profilePhotoUrl: '',
  });
  const [skills, setSkills] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [contactInfo, setContactInfo] = useState({
    twitter: '',
    linkedIn: '',
    email: '',
  });

  useEffect(() => {
    if (user) {
      // Fetch data from Clerk's unsafeMetadata when the user is authenticated
      const metadata = user.unsafeMetadata || {};
      setUserProfile({
        name: user.fullName || '',
        location: metadata.location || '',
        bio: metadata.bio || '',
        profilePhotoUrl: user.profileImageUrl || '',
      });
      setSkills(metadata.skills || []);
      setProjects(metadata.projects || []);
      setContactInfo({
        twitter: metadata.twitter || '',
        linkedIn: metadata.linkedIn || '',
        email: user.emailAddresses[0]?.emailAddress || '',
      });
    }
  }, [user]);

  const updateMetadata = async (newData: any) => {
    await updateUser({ unsafeMetadata: { ...user.unsafeMetadata, ...newData } });
  };

  const handleProfileSubmit = async (profileData: any) => {
    setUserProfile(profileData);
    await updateMetadata({ location: profileData.location, bio: profileData.bio });
  };

  const handleSkillsSubmit = async (newSkill: any) => {
    const updatedSkills = [...skills, newSkill];
    setSkills(updatedSkills);
    await updateMetadata({ skills: updatedSkills });
  };

  const handleProjectsSubmit = async (newProject: any) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    await updateMetadata({ projects: updatedProjects });
  };

  const handleContactSubmit = async (contactData: any) => {
    setContactInfo(contactData);
    await updateMetadata({ twitter: contactData.twitter, linkedIn: contactData.linkedIn });
  };

  return (
    <YStack alignItems="center" justifyContent="center" padding="$4" flex={1}>
      <Tabs defaultValue="profile" orientation="horizontal" flexDirection="column" width="100%" maxWidth={700}>
        <Tabs.List separator={<Separator vertical />} aria-label="Edit your profile" justifyContent="center">
          {['profile', 'skills', 'projects', 'contact'].map((tab) => (
            <Tabs.Tab key={tab} flex={1} value={tab}>
              <SizableText fontFamily="$body">{tab.charAt(0).toUpperCase() + tab.slice(1)}</SizableText>
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <Separator />

        <Tabs.Content value="profile">
          <ProfileEditForm userProfile={userProfile} onSubmit={handleProfileSubmit} />
        </Tabs.Content>

        <Tabs.Content value="skills">
          <SkillsEditForm skills={skills} onSubmit={handleSkillsSubmit} />
        </Tabs.Content>

        <Tabs.Content value="projects">
          <ProjectsEditForm projects={projects} onSubmit={handleProjectsSubmit} />
        </Tabs.Content>

        <Tabs.Content value="contact">
          <ContactEditForm contactInfo={contactInfo} onSubmit={handleContactSubmit} />
        </Tabs.Content>
      </Tabs>
    </YStack>
  );
};

// Profile Edit Form
const ProfileEditForm: React.FC<{ userProfile: any; onSubmit: (data: any) => void }> = ({ userProfile, onSubmit }) => {
  const [formData, setFormData] = useState(userProfile);

  useEffect(() => setFormData(userProfile), [userProfile]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Profile Information</SizableText>
      <form onSubmit={handleSubmit}>
        {['name', 'location', 'bio'].map((field) => (
          <YStack key={field}>
            <SizableText>{field.charAt(0).toUpperCase() + field.slice(1)}</SizableText>
            <input
              type="text"
              value={formData[field] || ''}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              placeholder={`Enter your ${field}`}
              aria-label={`Enter your ${field}`}
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
const SkillsEditForm: React.FC<{ skills: any[]; onSubmit: (skill: any) => void }> = ({ skills, onSubmit }) => {
  const [skillData, setSkillData] = useState({ skill: '', proficiency: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(skillData);
    setSkillData({ skill: '', proficiency: '' });
  };

  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Skills</SizableText>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={skillData.skill}
          onChange={(e) => setSkillData({ ...skillData, skill: e.target.value })}
          placeholder="Enter skill"
          style={{ padding: 8, width: '100%' }}
        />
        <input
          type="text"
          value={skillData.proficiency}
          onChange={(e) => setSkillData({ ...skillData, proficiency: e.target.value })}
          placeholder="Enter proficiency"
          style={{ padding: 8, width: '100%' }}
        />
        <Button width="100%" type="submit">
          Add Skill
        </Button>
      </form>
    </YStack>
  );
};

// Projects Edit Form
const ProjectsEditForm: React.FC<{ projects: any[]; onSubmit: (project: any) => void }> = ({ projects, onSubmit }) => {
  const [projectData, setProjectData] = useState({ name: '', link: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(projectData);
    setProjectData({ name: '', link: '' });
  };

  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Projects</SizableText>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={projectData.name}
          onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
          placeholder="Project Name"
          style={{ padding: 8, width: '100%' }}
        />
        <input
          type="url"
          value={projectData.link}
          onChange={(e) => setProjectData({ ...projectData, link: e.target.value })}
          placeholder="Project Link"
          style={{ padding: 8, width: '100%' }}
        />
        <Button width="100%" type="submit">
          Add Project
        </Button>
      </form>
    </YStack>
  );
};

// Contact Edit Form
const ContactEditForm: React.FC<{ contactInfo: any; onSubmit: (data: any) => void }> = ({ contactInfo, onSubmit }) => {
  const [formData, setFormData] = useState(contactInfo);

  useEffect(() => setFormData(contactInfo), [contactInfo]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <YStack padding="$3" gap="$3" width="100%">
      <SizableText fontSize="$5">Edit Contact Information</SizableText>
      <form onSubmit={handleSubmit}>
        {['twitter', 'linkedIn', 'email'].map((field) => (
          <YStack key={field}>
            <SizableText>{field.charAt(0).toUpperCase() + field.slice(1)}</SizableText>
            <input
              type={field === 'email' ? 'email' : 'url'}
              value={formData[field] || ''}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
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
