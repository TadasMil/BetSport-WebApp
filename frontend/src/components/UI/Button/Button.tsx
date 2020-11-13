import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    children: string;
    btnClass: any;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, btnClass, onClick }) => {
    return <button className={styles[btnClass]} onClick={onClick}> {children}</button>
}
