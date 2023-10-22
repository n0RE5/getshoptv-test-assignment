import React from 'react'
import styles from './Checkbox.module.scss';

interface CheckboxProps {
    isChecked: boolean,
    setIsChecked: (arg0: any) => void,
    children: React.ReactNode
}

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, setIsChecked, children }) => {
    return (
        <div className={styles.checkbox}>
            <input 
                type="checkbox"
                checked={isChecked}
                className={styles.checkbox_input}
                onChange={() => setIsChecked((prev: boolean) => !prev)}
            />
            <div className={styles.checkbox_label}>
                {children}
            </div>
        </div>
    );
}

export default Checkbox;