import { create } from "zustand";
import React from "react";

interface modalState {
  showModal: boolean;
  modalTitle: string;
  modalForm: React.JSX.Element;
  setShowModal: (value: boolean) => void;
  setModalInfo: (title: string, form: React.JSX.Element) => void;
}

export const useModal = create<modalState>((set) => ({
  showModal: false,
  modalTitle: "",
  modalForm: React.createElement("div"),
  setShowModal: (value: boolean) => set({ showModal: value }),
  setModalInfo: (title: string, form: React.JSX.Element) =>
    set({ modalTitle: title, modalForm: form }),
}));
