import React from 'react'
import styles from "./NotFound.module.scss"

interface NotFoundProps {
    nameOfPage: string;
}

export const NotFound: React.FC<NotFoundProps> = ({ nameOfPage }) => {
    return (
        <div className={styles.NotFoundBox}>
            <p>{nameOfPage} nėra</p>
        </div>
    )
}
