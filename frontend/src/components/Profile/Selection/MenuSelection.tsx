import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./MenuSelection.module.scss"

interface MenuOptions {
    id: number;
    type: string;
    name: string;
}

const menuOptions: MenuOptions[] = [
    { id: 1, type: "/details", name: "Mano profilis" },
    { id: 2, type: "/messages", name: "Pranešimai" },
    { id: 3, type: "/discounts", name: "Nuolaidos" },
    { id: 4, type: "/game-history", name: "Žaidimų istorija" },
    { id: 5, type: "/redeem", name: "Atsiimti laimėjimą" },
    { id: 6, type: "/logout", name: "Atsijungti" },
]

interface MenuSelectionProps {
    url: string;
}

export const MenuSelection: React.FC<MenuSelectionProps> = ({ url }) => {
    return (
        <div className={styles.MenuSelection}>
            {menuOptions.map(option => {
                return <Link key={option.id} to={`${url}${option.type}`}>{option.name}</Link>
            })}
        </div>
    )
}
