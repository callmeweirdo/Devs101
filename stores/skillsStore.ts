import { create } from 'zustand';
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
    try {
      const user = await clerkClient.users.getUser(userId);
      const fetchedSkills = user.privateMetadata.skills as Skill[] | undefined;
      set({ skills: fetchedSkills || [] });
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  },

  updateSkills: async (userId: string, skills: Skill[]) => {
    try {
      await clerkClient.users.updateUser(userId, { privateMetadata: { skills } });
      set({ skills }); // Update the store with the latest skills
    } catch (error) {
      console.error("Error updating skills:", error);
    }
  },
}));
