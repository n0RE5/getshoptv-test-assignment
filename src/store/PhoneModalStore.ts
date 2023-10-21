import {create} from 'zustand';

interface PhoneModalState {
    isActive: boolean,
    phoneNumber: string,
    setPhoneNumber: (arg0: string) => void,
    clearPhoneNumber: () => void,
    switchState: (arg0: boolean) => void
}

export const usePhoneModalStore = create<PhoneModalState>((set) => ({
    isActive: false,
    phoneNumber: '7',
    setPhoneNumber: (number: string) => {
        if(number.length > 11) {
            return
        }
        set(state => ({
            phoneNumber: state.phoneNumber + number
        }))
    },
    clearPhoneNumber: () => set({
        phoneNumber: '7'
    }),
    switchState: (active: boolean) => set({
        isActive: active 
    })
}))