import { create } from 'zustand';

type StoreState = {
  expanded: boolean;
  toggleSiderbar: (value?: boolean) => void;
};

export const useAppStore = create<StoreState>((set) => ({
  expanded: false,
  toggleSiderbar: (value?: boolean) => set((prev) => ({ expanded: value || !prev.expanded })),
}));
