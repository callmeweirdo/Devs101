import create from 'zustand';
import { clerkClient } from '@clerk/clerk-expo';

interface Skill {
  skill: string;
  proficiency: string;
}

interface SkillsStore {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
  fetchSkills: (userId: string) => Promise<void>;
  updateSkills: (userId: string, skills: Skill[]) => Promise<void>;
}

export const useSkillsStore = create<SkillsStore>((set) => ({
  skills: [],
  setSkills: (skills) => set({ skills }),

  fetchSkills: async (userId: string) => {
    const user = await clerkClient.users.getUser(userId);
    set({ skills: user.privateMetadata.skills || [] });
  },

  updateSkills: async (userId: string, skills: Skill[]) => {
    await clerkClient.users.updateUser(userId, { privateMetadata: { skills } });
    set({ skills });
  },
}));
