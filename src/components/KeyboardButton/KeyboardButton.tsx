import React from 'react'
import styles from './KeyboardButton.module.scss';

interface KeyboardButtonProps {
    value: string
    gridGrow?: number
    onClick: (...args: any) => void
}

const KeyboardButton: React.FC<KeyboardButtonProps> = React.memo(({ value, gridGrow, onClick }) => {
    return (
        <div 
            className={styles.button} 
            data-grow={gridGrow}
            onClick={onClick}
            tabIndex={0}
        >
            {value}
        </div>
    );
})

export default KeyboardButton;