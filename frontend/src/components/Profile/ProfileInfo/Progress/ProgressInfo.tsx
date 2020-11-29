import React from 'react'
import styles from "./ProgressInfo.module.scss"

interface ProgressInfoProps {
    progressInfo: any;
}

export const ProgressInfo: React.FC<ProgressInfoProps> = ({ progressInfo }) => {
    const { progress, type } = progressInfo;
    return (
        <div className={styles.ProgressInfo}>
            <h2>{progress}</h2>
            <p>{type}</p>
        </div>
    )
}
