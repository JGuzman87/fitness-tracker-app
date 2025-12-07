import { create } from 'zustand';

export const useModalStore = create((set) => ({
    modalName: null,
    isOpen: false,
    content: null,
    
    
    openModal: (name) => set({ modalName:name, isOpen: true, content: null,}),
    closeModal: () => set({ isOpen: false, content: null }),
}));

