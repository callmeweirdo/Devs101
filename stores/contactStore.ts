import {create} from 'zustand';
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
    const user = await clerkClient.users.getUser(userId);
    set({ contactInfo: user.privateMetadata.contact || {} });
  },

  updateContactInfo: async (userId: string, contactInfo: ContactInfo) => {
    await clerkClient.users.updateUser(userId, { privateMetadata: { contact: contactInfo } });
    set({ contactInfo });
  },
}));
