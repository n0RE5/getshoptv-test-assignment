import React, { useCallback } from 'react'
import styles from './PhoneModal.module.scss';
import { usePhoneModalStore } from '../../store/PhoneModalStore';
import Keyboard from '../Keyboard/Keyboard';
import InputMask from 'react-input-mask'
import qrcode from '../../assets/qr.svg';
import { useQrModalStore } from '../../store/QrModalStore';

const PhoneModal = () => {
    const { isActive, phoneNumber, setPhoneNumber, clearPhoneNumber, closePhoneModal } = usePhoneModalStore(state => state)
    const { openQrModal } = useQrModalStore(state => state)

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault()
    }

    const handleClose = useCallback(() => {
        closePhoneModal()
        openQrModal()
    }, [])

    if(!isActive) {
        return null
    }

    return (
        <div className={styles.phonemodal}>
            <div className={styles.phonemodal_w}>
                <div className={styles.phonemodal_content}>
                    <div className={styles.phonemodal_text}>Введите ваш номер мобильного телефона</div>
                    <InputMask 
                        className={styles.phonemodal_input} 
                        mask='+7(999)999-9999' 
                        max={11} 
                        value={phoneNumber} 
                    />
                    <div className={styles.phonemodal_microtext}>и с Вами свяжется наш менеджер для дальнейшей консультации</div>
                    <Keyboard 
                        setValue={setPhoneNumber} 
                        clearValue={clearPhoneNumber} 
                    />
                    <button 
                        className={styles.phonemodal_button}
                        onClick={handleClick}
                        autoFocus
                    >
                        ПОДТВЕРДИТЬ НОМЕР
                    </button>
                </div>
                <div className={styles.phonemodal_sidebar}>
                    <button 
                        onClick={handleClose}
                        className={styles.phonemodal_close}
                    >
                    
                    </button>
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