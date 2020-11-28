import React from 'react'
import styles from "./WrongDetailsMessage.module.scss"

interface LoginFailedProps {
    wrongDetailsMessage: string
}


export const WrongDetailsMessage: React.FC<LoginFailedProps> = ({ wrongDetailsMessage }) => wrongDetailsMessage ? <p className={styles.WrongDetailsMessage}>{wrongDetailsMessage}</p> : null
