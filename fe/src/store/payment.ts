import {create} from "zustand";

interface PaymentState {
  Payment: string[]
  setPayment: (Payment: string[]) => void;
}

export const usePaymentStore = create<PaymentState>((set) => ({
  Payment: [],
  setPayment: (Payment) => set({ Payment }),
}));