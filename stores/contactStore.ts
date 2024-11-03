import { create } from 'zustand';
import { clerkClient } from '@clerk/clerk-expo';

interface ContactInfo {
  twitter?: string;
  linkedIn?: string;
  email?: string;
}

interface ContactStore {
  contactInfo: ContactInfo;
  setContactInfo: (contactInfo: ContactInfo) => void;
  fetchContactInfo: (userId: string) => Promise<void>;
  updateContactInfo: (userId: string, contactInfo: ContactInfo) => Promise<void>;
}

export const useContactStore = create<ContactStore>((set) => ({
  contactInfo: {},

  setContactInfo: (contactInfo) => set({ contactInfo }),

  fetchContactInfo: async (userId: string) => {
    try {
      const user = await clerkClient.users.getUser(userId);
      set({ contactInfo: user.privateMetadata.contact || {} });
    } catch (error) {
      console.error("Error fetching contact info:", error);
    }
  },

  updateContactInfo: async (userId: string, contactInfo: ContactInfo) => {
    try {
      await clerkClient.users.updateUser(userId, { privateMetadata: { contact: contactInfo } });
      set({ contactInfo });
    } catch (error) {
      console.error("Error updating contact info:", error);
    }
  },
}));
