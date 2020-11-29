import React from 'react'
import styles from "./CenteredLayout.module.scss"

export const CenteredLayout: React.FC = ({ children }) => {
    return (
        <div className={styles.CenteredLayout}>
            {children}
        </div>
    )
}
