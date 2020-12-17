import React from 'react'
import { Link } from '../UI/Button/Link'
import { FiSettings } from 'react-icons/fi';
import { BsFillPersonFill } from "react-icons/bs"
import styles from './ProfileBar.module.scss'
import { Button } from '../UI/Button/Button';
import { MoneyDisplay } from '../UI/MoneyDisplay/MoneyDisplay';

interface NavLinksProps {
    money: number;
    mobileView: boolean;
    isDropdownVisible: boolean;
    removeCurrentUser: () => void;
}

export const ProfileBar: React.FC<NavLinksProps> = ({ removeCurrentUser, money, mobileView, isDropdownVisible }) => {

    return (
        <div className={styles.RightNavBarLinks}>
            <div className={styles.MoneyDisplay}>
                <MoneyDisplay money={money!} />
            </div>
            {!mobileView && <Link btnClass='ButtonBlue' path='/profile/details'>Profilis</Link>}
            <div className={styles.SettingsMenu}>
                <button>
                    <FiSettings />
                </button>
                <div className={styles.MenuItems}>
                    <>
                        <Link btnClass="MenuSettingsButton" path='/home'>Nustatymai</Link>
                        <Button btnClass="MenuSettingsButton" onClick={removeCurrentUser}>Atsijungti</Button>
                    </>
                </div>
            </div>
        </div>
    )
}
