import React from 'react'
import styles from "./FullLayout.module.scss"

export const FullLayout: React.FC = ({ children }) => {
    return (
        <div className={styles.FullLayout}>
            {children}
        </div>
    )
}
