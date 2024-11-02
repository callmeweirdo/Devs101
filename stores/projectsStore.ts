import {create} from 'zustand';
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
    const user = await clerkClient.users.getUser(userId);
    set({ projects: user.privateMetadata.projects || [] });
  },

  updateProjects: async (userId: string, projects: Project[]) => {
    await clerkClient.users.updateUser(userId, { privateMetadata: { projects } });
    set({ projects });
  },
}));
