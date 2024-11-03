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

      // Check if fetchedProjects is defined and is an array
      if (Array.isArray(fetchedProjects)) {
        set({ projects: fetchedProjects });
      } else {
        console.warn("Fetched projects are not an array or are undefined.");
        set({ projects: [] }); // Reset to an empty array if no valid projects found
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  },

  updateProjects: async (userId: string, projects: Project[]) => {
    try {
      await clerkClient.users.updateUser(userId, { privateMetadata: { projects } });
      set({ projects }); // Update the store with the new projects list
    } catch (error) {
      console.error("Error updating projects:", error);
    }
  },
}));
