import React from 'react'
import { LinkButton } from '../UI/Button/LinkButton'
import { FiSettings } from 'react-icons/fi';
import styles from './ProfileBar.module.scss'


export const ProfileBar: React.FC = () => {
    return (
        <div className={styles.RightNavBarLinks}>
            <h4>Pinigai: <span>1000</span>€</h4>
            <LinkButton btnClass='ButtonBlue' path='/home'>Profilis</LinkButton>
            <div className={styles.SettingsMenu}>
                <button><FiSettings /></button>
                <div className={styles.MenuItems}>
                    <LinkButton btnClass="MenuSettingsButton" path='/home'>Nustatymai</LinkButton>
                    <LinkButton btnClass="MenuSettingsButton" path='/home'>Atsijungti</LinkButton>
                </div>
            </div>
        </div>
    )
}
