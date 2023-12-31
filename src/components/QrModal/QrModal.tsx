import React, { useCallback, useEffect } from 'react'
import { usePhoneModalStore } from '../../store/PhoneModalStore';
import styles from './QrModal.module.scss';
import qrcode from '../../assets/qr.svg'
import { useQrModalStore } from '../../store/QrModalStore';
import { useVideoPlayerStore } from '../../store/VideoPlayerStore';

const QrModal = () => {
    const { isActive, closeQrModal, openQrModal } = useQrModalStore(state => state)
    const { openPhoneModal } = usePhoneModalStore(state => state)
    const { pause } = useVideoPlayerStore(state => state)

    const handleClick = useCallback((event: React.MouseEvent) => {
        event.preventDefault()
        closeQrModal()
        openPhoneModal()
        pause()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            openQrModal()
        }, 5000)
    }, [])

    if(!isActive) {
        return null
    }

    return (
        <div className={styles.qrmodal}>
            <form className={styles.qrmodal_w}>
                <h1 className={styles.qrmodal_text}>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!</h1>
                <h2 className={styles.qrmodal_text}>ПОДАРИТЕ ЕМУ СОБАКУ!</h2>
                <div className={styles.qrmodal_qr}>
                    <img src={qrcode} alt="qr" />
                </div>
                <div className={styles.qrmodal_desc}>
                    Сканируйте QR-код 
                    <br />
                    или нажмите ОК
                </div>
                <button 
                    autoFocus 
                    onClick={handleClick} 
                    className={styles.qrmodal_button}
                >
                    OK
                </button>
            </form>
        </div>
    );
}

export default QrModal;