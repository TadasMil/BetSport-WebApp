import React from 'react'
import styles from "./ProfileTitle.module.scss"

export const ProfileTitle: React.FC = ({ children }) => {
    return (
        <h2 className={styles.ProfileTitle}>{children}</h2>
    )
}
