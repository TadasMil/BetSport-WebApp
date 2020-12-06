import React from 'react'
import { Link } from 'react-router-dom'
import { profileSubRoutes } from '../../../pages/Profile'
import styles from "./MenuSelection.module.scss"

interface MenuSelectionProps {
    url: string;
}

export const MenuSelection: React.FC<MenuSelectionProps> = ({ url }) => {

    return (
        <div className={styles.MenuSelection}>
            {profileSubRoutes.map(option => {
                return <Link key={option.id} to={`${url}${option.path}`}>{option.name}</Link>
            })}
        </div>
    )
}
