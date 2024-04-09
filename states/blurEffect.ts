import { create } from "zustand";

interface blurEffectState {
  blurState: boolean;
  setBlurState: (value: boolean) => void;
}

export const useBlurEffect = create<blurEffectState>((set) => ({
  blurState: false,
  setBlurState: (value: boolean) => set({ blurState: value }),
}));
