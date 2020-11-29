import React from 'react'
import styles from "./ProfileLayout.module.scss"

export const ProfileLayout: React.FC = ({ children }) => {
    return (
        <div className={styles.ProfileLayout}>
            {children}
        </div>
    )
}
