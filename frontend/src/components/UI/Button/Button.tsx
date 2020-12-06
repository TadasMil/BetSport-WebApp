import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    children: string | React.ReactChild;
    isDisabled?: boolean;
    btnClass: any;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, btnClass, isDisabled, onClick }) => {
    return <button disabled={isDisabled} className={styles[btnClass]} onClick={onClick}>{children}</button>
}
