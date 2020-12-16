import React from 'react'
import { Link } from '../UI/Button/Link'
import { FiSettings } from 'react-icons/fi';
import { BsFillPersonFill } from "react-icons/bs"
import styles from './ProfileBar.module.scss'
import { Button } from '../UI/Button/Button';
import { IProfileSubRoutes, profileSubRoutes } from '../../pages/Profile';
import { RiMoneyEuroCircleFill } from 'react-icons/ri';
import { Icon } from '../UI/Icon/Icon';

interface NavLinksProps {
    money: number | undefined;
    mobileView: boolean;
    isDropdownVisible: boolean;
    removeCurrentUser: () => void;
}

export const ProfileBar: React.FC<NavLinksProps> = ({ removeCurrentUser, money, mobileView, isDropdownVisible }) => {

    return (
        <div className={styles.RightNavBarLinks}>
            <div className={styles.MoneyDisplay}>
                <span>{money}</span>
                <Icon styling="MoneyIcon">
                    <RiMoneyEuroCircleFill />
                </Icon>
            </div>
            {!mobileView && <Link btnClass='ButtonBlue' path='/profile/details'>Profilis</Link>}
            <div className={styles.SettingsMenu}>
                {
                    mobileView ?
                        <Button btnClass="Profile">
                            <BsFillPersonFill />
                        </Button> :
                        <button>
                            <FiSettings />
                        </button>
                }
                <div className={styles.MenuItems}>
                    {mobileView && profileSubRoutes.map((route: IProfileSubRoutes) => {
                        return <Link btnClass="MenuSettingsButton" path={`/profile${route.path}`}>{route.name}</Link>
                    })}
                    {!mobileView &&
                        <>
                            <Link btnClass="MenuSettingsButton" path='/home'>Nustatymai</Link>
                            <Button btnClass="MenuSettingsButton" onClick={removeCurrentUser}>Atsijungti</Button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
