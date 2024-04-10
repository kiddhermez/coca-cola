import { create } from "zustand";

interface searchTermState {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const useSearchTerm = create<searchTermState>((set) => ({
  searchTerm: "",
  setSearchTerm: (value: string) => set({ searchTerm: value }),
}));
