import { create } from "zustand";

export interface ActualListState {
  actualCategory: string;
  listRoute: string;
  setActualList: (value: { category: string; route: string }) => void;
}

export const useActualList = create<ActualListState>((set) => ({
  actualCategory: "Inventario",
  listRoute: "rawMaterial",
  setActualList: ({ category, route }) => {
    set({
      actualCategory: category,
      listRoute: route,
    });
  },
}));
