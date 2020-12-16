import React from 'react'
import styles from "./BetField.module.scss"

interface BetFieldProps {
    betAmount: number;
    validateInputField: (e: any) => void;
}

export const BetField: React.FC<BetFieldProps> = ({ betAmount, validateInputField }) => {
    return (
        <div className={styles.BetField}>
            <label>Statymas:</label>
            <input type="text" value={betAmount} onChange={validateInputField} />
            <span>€</span>
        </div>
    )
}
