import React from 'react'
import styles from './KeyboardButton.module.scss';

interface KeyboardButtonProps {
    value: string
    gridGrow?: number
    onClick: (...args: any) => void
}

const KeyboardButton: React.FC<KeyboardButtonProps> = React.memo(({ value, gridGrow, onClick }) => {
    return (
        <button 
            className={styles.button} 
            data-grow={gridGrow}
            onClick={onClick}
            tabIndex={0}
        >
            {value}
        </button>
    );
})

export default KeyboardButton;