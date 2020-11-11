import React from 'react'
import styles from '../Button.module.scss'

interface LoginButtonProps {
    btnClass: string;
}

export const LoginButton: React.FC<LoginButtonProps> = ({ btnClass, children }) => {
    return (
        <button className={styles[btnClass]}>{children}</button>
    )
}
