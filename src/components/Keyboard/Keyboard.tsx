import React, { useState } from 'react'
import styles from './Keyboard.module.scss';
import KeyboardButton from '../KeyboardButton/KeyboardButton';

interface KeyboardProps {
    setValue: (arg0: string) => void,
    clearValue: () => void
}

const Keyboard: React.FC<KeyboardProps> = ({ setValue, clearValue }) => {
    const [keyboardButtons] = useState([
        {
            value: '1',
            onClick: () => setValue('1')
        },
        {
            value: '2',
            onClick: () => setValue('2')
        },
        {
            value: '3',
            onClick: () => setValue('3')
        },
        {
            value: '4',
            onClick: () => setValue('4')
        },
        {
            value: '5',
            onClick: () => setValue('5')
        },
        {
            value: '6',
            onClick: () => setValue('6')
        },
        {
            value: '7',
            onClick: () => setValue('7')
        },
        {
            value: '8',
            onClick: () => setValue('8')
        },
        {
            value: '9',
            onClick: () => setValue('9')
        },
        {
            value: 'Стереть',
            onClick: () => clearValue(),
            gridGrow: 2
        },
        {
            value: '0',
            onClick: () => setValue('0')
        },
    ])

    return (
        <div className={styles.keyboard}>
            {keyboardButtons.map(({value, onClick, gridGrow}, index) =>
                <KeyboardButton 
                    key={index} 
                    onClick={onClick} 
                    value={value}
                    gridGrow={gridGrow}
                />
            )}
        </div>
    );
}

export default Keyboard;