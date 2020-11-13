import React from 'react'
import { Link } from '../UI/Button/Link'
import { FiSettings } from 'react-icons/fi';
import styles from './ProfileBar.module.scss'
import { Button } from '../UI/Button/Button';

interface NavLinksProps {
    removeCurrentUser: () => void;
}

export const ProfileBar: React.FC<NavLinksProps> = ({ removeCurrentUser }) => {
    return (
        <div className={styles.RightNavBarLinks}>
            <h4>Pinigai: <span>1000</span>€</h4>
            <Link btnClass='ButtonBlue' path='/home'>Profilis</Link>
            <div className={styles.SettingsMenu}>
                <button><FiSettings /></button>
                <div className={styles.MenuItems}>
                    <Link btnClass="MenuSettingsButton" path='/home'>Nustatymai</Link>
                    <Button btnClass="MenuSettingsButton" onClick={removeCurrentUser}>Atsijungti</Button>
                </div>
            </div>
        </div>
    )
}
