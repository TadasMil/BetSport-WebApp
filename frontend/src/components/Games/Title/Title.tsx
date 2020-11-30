import React from 'react'
import styles from './Title.module.scss'


interface GameTitleProps {
    name: string;
}

export const Title: React.FC<GameTitleProps> = ({ name }) => {
    return (
        <h2 className={styles.GameTitle}>{name}</h2>
    )
}
