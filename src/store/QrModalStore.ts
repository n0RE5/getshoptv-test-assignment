import {create} from 'zustand';

interface QrModalState {
    isActive: boolean,
    switchState: (arg0: boolean) => void
}

export const useQrModalStore = create<QrModalState>((set) => ({
    isActive: false,
    switchState: (active: boolean) => set({
        isActive: active 
    })
}))