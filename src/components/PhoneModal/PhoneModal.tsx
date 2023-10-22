import React, { useCallback } from 'react'
import styles from './PhoneModal.module.scss';
import { usePhoneModalStore } from '../../store/PhoneModalStore';
import qrcode from '../../assets/qr.svg';
import { useQrModalStore } from '../../store/QrModalStore';
import PhoneKeyboard from '../PhoneKeyboard/PhoneKeyboard';
import { useVideoPlayerStore } from '../../store/VideoPlayerStore';

const PhoneModal = () => {
    const { isActive, closePhoneModal } = usePhoneModalStore(state => state)
    const { openQrModal } = useQrModalStore(state => state)
    const { play } = useVideoPlayerStore(state => state)

    const handleClose = useCallback(() => {
        closePhoneModal()
        openQrModal()
        play()
    }, [])

    if(!isActive) {
        return null
    }

    return (
        <div className={styles.phonemodal}>
            <div className={styles.phonemodal_w}>
                <PhoneKeyboard />
                <div className={styles.phonemodal_sidebar}>
                    <button 
                        onClick={handleClose}
                        className={styles.phonemodal_close}
                    />
                    <div className={styles.phonemodal_qr}>
                        <div className={styles.phonemodal_qr__text}>
                            СКАНИРУЙТЕ QR-КОД <br />
                            ДЛЯ ПОЛУЧЕНИЯ <br />
                            ДОПОЛНИТЕЛЬНОЙ <br />
                            ИНФОРМАЦИИ
                        </div>
                        <img src={qrcode} alt="qrcode" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhoneModal;