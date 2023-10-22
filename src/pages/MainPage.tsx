import React from 'react'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import PhoneModal from '../components/PhoneModal/PhoneModal';
import QrModal from '../components/QrModal/QrModal';
import video from '../assets/placeholder.mp4';
import '../styles/mainpage.scss'

const MainPage = () => {
    return (
        <div className='container mainpage'>
            <VideoPlayer src={video} />
            <PhoneModal />
            <QrModal />
        </div>
    );
}

export default MainPage;