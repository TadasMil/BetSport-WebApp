import React from 'react'
import styles from './NavBar.module.scss'
import { NavImage } from './NavImage/NavImage'
import { NavLinks } from './NavLinks/NavLinks'

export const NavBar: React.FC = () => {
    return (
        <div className={styles.NavBar}>
            <NavImage />
            <NavLinks />
        </div>
    )
}
