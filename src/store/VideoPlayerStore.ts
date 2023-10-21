import {create} from 'zustand';

interface VideoPlayerState {
    isActive: boolean,
    switchState: (arg0: boolean) => void
}

export const useVideoPlayerStore = create<VideoPlayerState>((set) => ({
    isActive: true,
    switchState: (active: boolean) => set({
        isActive: active 
    })
}))