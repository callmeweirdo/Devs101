import { create } from 'zustand';
import { clerkClient, User, useAuth } from '@clerk/clerk-expo';

interface UserProfileStore {
  userProfile: User | null;
  setUserProfile: (profile: User) => void;
  fetchUserProfile: () => Promise<void>;
  updateUserProfile: (profile: Partial<User>) => Promise<void>;
}

export const useUserProfileStore = create<UserProfileStore>((set) => ({
  userProfile: null,

  setUserProfile: (profile) => set({ userProfile: profile }),

  fetchUserProfile: async () => {
    try {
      const { userId } = useAuth();
      if (userId) {
        const user = await clerkClient.users.getUser(userId);
        set({ userProfile: user });
      } else {
        console.error("No user ID found. User is not authenticated.");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      alert("Error fetching user profile.");
    }
  },

  updateUserProfile: async (profile: Partial<User>) => {
    try {
      const { userId } = useAuth();
      if (userId) {
        const updatedUser = await clerkClient.users.updateUser(userId, { privateMetadata: { ...profile } });
        set({ userProfile: updatedUser });
      } else {
        console.error("No user ID found. User is not authenticated.");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  },
}));
