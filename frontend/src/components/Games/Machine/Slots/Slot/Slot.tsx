import React from 'react'
import styles from "./Slot.module.scss"

export const Slot: React.FC = ({ children }) => {
    return (
        <span className={styles.Slot}>
            {children}
        </span>
    )
}
