import { create } from 'zustand';
import { clerkClient, User } from '@clerk/clerk-expo';

interface UserProfileStore {
  userProfile: User | null;
  setUserProfile: (profile: User) => void;
  fetchUserProfile: (userId: string) => Promise<void>;
  updateUserProfile: (userId: string, profile: Partial<User>) => Promise<void>;
}

export const useUserProfileStore = create<UserProfileStore>((set) => ({
  userProfile: null,

  setUserProfile: (profile) => set({ userProfile: profile }),

  fetchUserProfile: async (userId: string) => {
    try {
      const user = await clerkClient.users.getUser(userId);
      set({ userProfile: user });
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  },

  updateUserProfile: async (userId: string, profile: Partial<User>) => {
    try {
      const updatedUser = await clerkClient.users.updateUser(userId, { privateMetadata: { ...profile } });
      set({ userProfile: updatedUser });
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  },
}));
