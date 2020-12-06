import React from 'react'
import styles from "./MainWrapper.module.scss"

export const MainWrapper: React.FC = ({ children }) => {
    return (
        <div className={styles.MainWrapper}>
            {children}
        </div>
    )
}
