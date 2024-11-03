import { create } from 'zustand';
import { clerkClient } from '@clerk/clerk-expo';

interface Project {
  name: string;
  link: string;
}

interface ProjectsStore {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  fetchProjects: (userId: string) => Promise<void>;
  updateProjects: (userId: string, projects: Project[]) => Promise<void>;
}

export const useProjectsStore = create<ProjectsStore>((set) => ({
  projects: [],

  setProjects: (projects) => set({ projects }),

  fetchProjects: async (userId: string) => {
    try {
      const user = await clerkClient.users.getUser(userId);
      const fetchedProjects = user.privateMetadata.projects as Project[] | undefined;
      set({ projects: fetchedProjects || [] });
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  },

  updateProjects: async (userId: string, projects: Project[]) => {
    try {
      await clerkClient.users.updateUser(userId, { privateMetadata: { projects } });
      set({ projects });
    } catch (error) {
      console.error("Error updating projects:", error);
    }
  },
}));
