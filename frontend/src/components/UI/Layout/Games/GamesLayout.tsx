import React from 'react'
import styles from "./GamesLayout.module.scss"

export const GamesLayout: React.FC = ({ children }) => {
    return (
        <div className={styles.GamesLayout}>
            {children}
        </div>
    )
}
