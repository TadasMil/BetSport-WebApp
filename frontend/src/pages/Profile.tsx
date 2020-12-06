import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { Discounts } from '../components/Profile/ProfileDiscounts/Discounts';
import { GameHistory } from '../components/Profile/ProfileGameHistory/GameHistory';
import { ProfileInfo } from '../components/Profile/ProfileInfo/ProfileInfo';
import { ProfileMessages } from '../components/Profile/ProfileMessages/ProfileMessages';
import { Redeem } from '../components/Profile/ProfileRedeem/Redeem';
import { MenuSelection } from '../components/Profile/Selection/MenuSelection';
import { ProfileLayout } from '../components/UI/Layout/ProfileLayout/ProfileLayout';
import { BaseSubRoutes } from '../routes/BaseSubRoutes';
import { RootState } from '../store/reducers';
import styles from "./Profile.module.scss"

export type userInfoType = string | undefined | number;

interface IProfileSubRoutes {
    id: number;
    path: string;
    name: string;
    component: any;
}

export const profileSubRoutes: IProfileSubRoutes[] = [
    { id: 1, path: "/details", name: "Mano profilis", component: ProfileInfo, },
    { id: 2, path: "/messages", name: "Pranešimai", component: ProfileMessages, },
    { id: 3, path: "/discounts", name: "Nuolaidos", component: Discounts, },
    { id: 4, path: "/game-history", name: "Žaidimų istorija", component: GameHistory, },
    { id: 5, path: "/redeem", name: "Atsiimti laimėjimą", component: Redeem, },
    { id: 6, path: "/logout", name: "Atsijungti", component: ProfileInfo, },
]

const Profile: React.FC = () => {

    const isUserAuth = useSelector((state: RootState) => {
        return state.user.user?.accessToken ? true : false;
    })

    let { path, url } = useRouteMatch();

    if (!isUserAuth) return <Redirect to="/" />

    return (
        <div className={styles.ProfilePage}>
            <div className={styles.ProfilePageBox}>
                <MenuSelection url={url} />
                <BaseSubRoutes routes={profileSubRoutes} path={path} layout={ProfileLayout} />
            </div>
        </div>
    )
}

export default React.memo(Profile);