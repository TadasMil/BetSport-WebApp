import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

interface ButtonProps {
    path: string;
    children: string;
    btnClass: any;
}

export const Button: React.FC<ButtonProps> = ({ path, children, btnClass }) => {
    return (
        <Link className={styles[btnClass]} to={path} > {children}</Link>
    )
}
