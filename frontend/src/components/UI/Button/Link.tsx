import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styles from './Button.module.scss'

interface ButtonProps {
    path: string;
    children: string;
    btnClass: any;
}

export const Link: React.FC<ButtonProps> = ({ path, children, btnClass }) => {
    return <RouterLink className={styles[btnClass]} to={path}>{children}</RouterLink>
}
