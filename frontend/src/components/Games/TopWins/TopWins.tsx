import React from 'react'
import { Title } from '../Title/Title'
import styles from "./TopWins.module.scss"

export const TopWins = () => {
    return (
        <div className={styles.TopWins}>
            <Title name="Lyderiai" />
            <div className={styles.Winner}>
                <h3>tadas</h3>
                <h5>500€</h5>
            </div>
            <div className={styles.Winner}>
                <h3>tadas</h3>
                <h5>500€</h5>
            </div>
            <div className={styles.Winner}>
                <h3>tadas</h3>
                <h5>500€</h5>
            </div>
            <div className={styles.Winner}>
                <h3>tadas</h3>
                <h5>500€</h5>
            </div>
        </div>
    )
}
