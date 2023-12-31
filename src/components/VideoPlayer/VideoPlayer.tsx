import React, { useEffect, useRef } from 'react'
import { useVideoPlayerStore } from '../../store/VideoPlayerStore';
import styles from './VideoPlayer.module.scss';

interface VideoPlayerProps {
    src: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    const ref = useRef<HTMLVideoElement>(null)
    const isActive = useVideoPlayerStore(state => state.isActive)

    const play = () => {
        if(ref.current) {
            if (isActive) {
                ref.current.play()
            } else {
                ref.current.pause()
            }
        }
    }

    useEffect(() => {
        play()
    }, [isActive])

    return (
        <video
            className={styles.videoplayer}
            ref={ref}
            muted
            loop
            autoPlay
        >
            <source src={src} type="video/mp4" />
        </video>
    );
}

export default VideoPlayer;