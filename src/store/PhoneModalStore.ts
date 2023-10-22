import {create} from 'zustand';
import { API_KEY } from '../utils/consts';

interface PhoneModalState {
    isActive: boolean,
    isValid: boolean,
    isVerified: boolean,
    phoneNumber: string,
    setPhoneNumber: (arg0: string) => void,
    clearPhoneNumber: () => void,
    openPhoneModal: () => void,
    closePhoneModal: () => void,
    verifyPhoneNumber: (arg0: string) => void
}

export const usePhoneModalStore = create<PhoneModalState>((set) => ({
    isActive: false,
    isVerified: false,
    isValid: true,
    phoneNumber: '7',
    setPhoneNumber: (number: string) => {
        if(number.length > 11) {
            return
        }
        set(state => ({
            isValid: true,
            isVerified: false,
            phoneNumber: state.phoneNumber + number
        }))
    },
    verifyPhoneNumber: async (number: string) => {
        const response = await fetch(`http://apilayer.net/api/validate?access_key=${API_KEY}&number=${number}`).then(data => data.json())
        if (response.valid) {
            set({
                isValid: true,
                isVerified: true
            })
        } else {
            set({
                isValid: false,
                isVerified: false
            })
        }
    },
    clearPhoneNumber: () => set({
        phoneNumber: '7',
        isValid: true,
        isVerified: false
    }),
    openPhoneModal: () => set({
        isActive: true,
        isValid: true,
        isVerified: false 
    }),
    closePhoneModal: () => set({
        isActive: false,
        isValid: true,
        isVerified: false 
    })
}))