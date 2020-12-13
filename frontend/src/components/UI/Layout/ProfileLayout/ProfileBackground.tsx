import React from 'react'
import styles from "./ProfileBackground.module.scss"

export const ProfileBackground: React.FC = ({ children }) => {
    return (
        <div className={styles.ProfileBackground}>
            {children}
        </div>
    )
}
