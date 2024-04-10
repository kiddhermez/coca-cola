import { create } from "zustand";
import data from "../data/rawMaterials.json";

interface actualListState<T> {
  actualList: T[];
  setActualList: (value: T) => void;
}

export const useActualList = create<actualListState<any>>((set) => ({
  actualList: data,
  setActualList: (value: any) => set({ actualList: value }),
}));
