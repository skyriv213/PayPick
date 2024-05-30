import {create} from "zustand";

interface ModalState {
  show: boolean;
  storeModal: (state:boolean) => void;
  rerenderShow: boolean;
  rerenderModal: (state:boolean) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  show: false,
  storeModal: (state) => set(() => ({ show: state })),
  rerenderShow: false,
  rerenderModal: (state) => set(() => ({ rerenderShow: state })),
}));