import React, { useEffect, useState } from 'react'
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

    const [keyboardCollection] = useState({
        "1": () => setValue('1'),
        "2": () => setValue('2'),
        "3": () => setValue('3'),
        "4": () => setValue('4'),
        "5": () => setValue('5'),
        "6": () => setValue('6'),
        "7": () => setValue('7'),
        "8": () => setValue('8'),
        "9": () => setValue('9'),
        "0": () => setValue('0'),
        "Backspace": () => clearValue()
    })

    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            if (keyboardCollection.hasOwnProperty(event.key)) {
                keyboardCollection[event.key as keyof typeof keyboardCollection]()
            }
        }
        document.addEventListener('keydown', listener)
        return () => {
            document.removeEventListener('keydown', listener)
        }
    })

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