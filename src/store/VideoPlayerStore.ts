import {create} from 'zustand';

interface VideoPlayerState {
    isActive: boolean,
    pause: () => void,
    play: () => void
}

export const useVideoPlayerStore = create<VideoPlayerState>((set) => ({
    isActive: true,
    pause: () => set({
        isActive: false 
    }),
    play: () => set({
        isActive: true 
    }),
}))