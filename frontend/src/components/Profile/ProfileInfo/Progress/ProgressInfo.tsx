import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProgressInfo.module.scss"


interface ProgressInfoProps {
    progressInfo: any;
}

export const ProgressInfo: React.FC<ProgressInfoProps> = ({ progressInfo }) => {
    const { progress, type, icon } = progressInfo;

    return (
        <div className={styles.ProgressInfoBox}>
            <FontAwesomeIcon icon={icon} />
            <div className={styles.ProgressInfo}>
                <h2>{progress}</h2>
                <p>{type}</p>
            </div>
        </div>
    )
}
