import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/reducers'
import { MainProfileSide } from './ProfileDetails/MainProfileSide'
import { Progress } from './Progress/Progress'
import { ProfileTitle } from '../Title/ProfileTitle'
import styles from "./ProfileInfo.module.scss"

export const ProfileInfo: React.FC = () => {
    const userDetails = useSelector((state: RootState) => {
        return state.user.user;
    })

    return (
        <div className={styles.ProfileInfo}>
            <ProfileTitle>Profilis</ProfileTitle>
            <MainProfileSide name={userDetails?.firstName} secondName={userDetails?.secondName} email={userDetails?.email} />
            <Progress name={userDetails?.firstName} secondName={userDetails?.secondName} money={userDetails?.score} gamesPlayed={userDetails?.gamesPlayed} gamesWon={userDetails?.gamesWon} moneyLost={userDetails?.moneyLost} moneyWon={userDetails?.moneyWon} />
        </div>
    )
}
