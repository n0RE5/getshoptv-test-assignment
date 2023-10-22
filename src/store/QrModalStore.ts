import {create} from 'zustand';

interface QrModalState {
    isActive: boolean,
    openQrModal: () => void
    closeQrModal: () => void
}

export const useQrModalStore = create<QrModalState>((set) => ({
    isActive: false,
    openQrModal: () => set({
        isActive: true 
    }),
    closeQrModal: () => set({
        isActive: false 
    })
}))