import React from 'react'
import { RiMoneyEuroCircleFill } from 'react-icons/ri'
import { Icon } from '../Icon/Icon'
import styles from "./MoneyDisplay.module.scss"

interface MoneyDisplayProps {
    money: number;
}

export const MoneyDisplay: React.FC<MoneyDisplayProps> = ({ money }) => {
    return (
        <div className={styles.MoneyDisplay}>
            <span>{money}</span>
            <Icon styling="MoneyIcon">
                <RiMoneyEuroCircleFill />
            </Icon>
        </div>
    )
}
