import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { MenuSelection } from '../components/Profile/Selection/MenuSelection';
import { ProfileRoutes } from '../routes/ProfileRoutes';
import { RootState } from '../store/reducers';
import styles from "./Profile.module.scss"

export type userInfoType = string | undefined | number;

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
                <ProfileRoutes path={path} />
            </div>
        </div>
    )
}

export default React.memo(Profile);