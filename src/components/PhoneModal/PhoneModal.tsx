import React from 'react'
import styles from './PhoneModal.module.scss';
import { usePhoneModalStore } from '../../store/PhoneModalStore';
import Keyboard from '../Keyboard/Keyboard';
import InputMask from 'react-input-mask'

const PhoneModal = () => {
    const isActive = usePhoneModalStore(state => state.isActive)
    const phoneNumber = usePhoneModalStore(state => state.phoneNumber)
    const setPhoneNumber = usePhoneModalStore(state => state.setPhoneNumber)
    const clearPhoneNumber = usePhoneModalStore(state => state.clearPhoneNumber)

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault()
    }

    if(!isActive) {
        return null
    }

    return (
        <div className={styles.phonemodal}>
            <div className={styles.phonemodal_w}>
                <form className={styles.phonemodal_content}>
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
                </form>
            </div>
        </div>
    );
}

export default PhoneModal;