import create from 'zustand';
import { clerkClient } from '@clerk/clerk-expo';
import { User } from '@clerk/clerk-expo';

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
    const user = await clerkClient.users.getUser(userId);
    set({ userProfile: user });
  },

  updateUserProfile: async (userId: string, profile: Partial<User>) => {
    await clerkClient.users.updateUser(userId, { privateMetadata: { ...profile } });
    set((state) => ({ userProfile: { ...state.userProfile, ...profile } }));
  },
}));