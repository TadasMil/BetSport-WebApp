import React from 'react'
import { Title } from '../Title/Title'
import styles from "./TopWins.module.scss"

export const TopWins = () => {
    return (
        <div className={styles.TopWins}>
            <Title name="Lyderiai" />
            <div>
                <h3>tadas: 500</h3>
            </div>
            <div>
                <h3>tadas: 500</h3>
            </div>
            <div>
                <h3>tadas: 500</h3>
            </div>
            <div>
                <h3>tadas: 500</h3>
            </div>
        </div>
    )
}
