import {create} from "zustand";

type toggleStore = {
    login: boolean,
    toggleLogin: () => void
}

export const toggleStore = create<toggleStore>((set) => ({
    login: false,
    toggleLogin: () => set((state) => ({ login: !state.login })),
}));