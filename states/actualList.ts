import { create } from "zustand";

export interface ActualListState {
  actualCategory: Category;
  actualList: any[];
  isLoading: boolean;
  setCategory: (category: Category) => void;
  setActualList: (list: any[]) => void;
  setIsLoading: (loading: boolean) => void;
}

interface Category {
  category: string;
  label: string;
}

export const useActualList = create<ActualListState>((set) => ({
  actualCategory: { category: "rawMaterial", label: "Inventario" },
  actualList: [],
  isLoading: true,
  setCategory: (category) => {
    set({
      actualCategory: category,
    });
  },
  setActualList: (list) => {
    set({
      actualList: list,
    });
  },
  setIsLoading: (loading) => {
    set({
      isLoading: loading,
    });
  },
}));
