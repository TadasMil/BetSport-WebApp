import React from 'react'
import styles from "./Page.module.scss"

export const Page: React.FC = ({ children }) => {
    return (
        <div className={styles.Page}>
            {children}
        </div>
    )
}