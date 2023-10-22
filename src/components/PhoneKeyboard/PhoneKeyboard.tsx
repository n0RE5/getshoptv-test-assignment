import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import Keyboard from '../UI/Keyboard/Keyboard';
import Checkbox from '../UI/Checkbox/Checkbox';
import styles from './PhoneKeyboard.module.scss';
import { usePhoneModalStore } from '../../store/PhoneModalStore';

const PhoneKeyboard = () => {
    const { phoneNumber, setPhoneNumber, clearPhoneNumber, isVerified, isValid, verifyPhoneNumber } = usePhoneModalStore(state => state)
    const [policyAgreed, setPolicyAgreed] = useState<boolean>(false)

    const handleClick = () => {
        verifyPhoneNumber(phoneNumber)
    }

    return (
        <div className={styles.phonekeyboard_content}>
            {!isVerified
                ? <>
                    <div className={styles.phonekeyboard_text}>Введите ваш номер мобильного телефона</div>
                    <InputMask 
                        className={isValid ? styles.phonekeyboard_input : styles.phonekeyboard_input__error} 
                        mask='+7(999)999-9999' 
                        max={11} 
                        value={phoneNumber} 
                    />
                    <div className={styles.phonekeyboard_microtext}>и с Вами свяжется наш менеджер для дальнейшей консультации</div>
                    <Keyboard 
                        setValue={setPhoneNumber} 
                        clearValue={clearPhoneNumber} 
                    />
                    {isValid
                        ? <Checkbox 
                            isChecked={policyAgreed} 
                            setIsChecked={setPolicyAgreed}
                          >
                            Согласие на обработку
                            <br />
                            персональных данных
                        </Checkbox>
                        : <div className={styles.phonekeyboard_error}>
                            НЕВЕРНО ВВЕДЁН НОМЕР
                        </div>
                    }

                    <button 
                        className={styles.phonekeyboard_button}
                        onClick={handleClick}
                        id="arrowNavigation"
                        disabled={phoneNumber.length < 11 || !policyAgreed}
                    >
                        ПОДТВЕРДИТЬ НОМЕР
                    </button>
                </>
                : <div className={styles.phonekeyboard_verified}>
                    <div className={styles.phonekeyboard_verified__title}>
                        ЗАЯВКА
                        <br />
                        ПРИНЯТА
                    </div>
                    <div className={styles.phonekeyboard_verified__text}>
                        Держите телефон под рукой.
                        <br />
                        Скоро с Вами свяжется наш менеджер.
                    </div>
                </div>
            }
        </div>
    );
}

export default PhoneKeyboard;