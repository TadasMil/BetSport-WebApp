import React from 'react'
import { userInfoType } from '../../../../pages/Profile'
import { ProgressInfo } from './ProgressInfo'
import styles from "./ProgressDetail.module.scss"
import { RiMoneyEuroCircleFill } from "react-icons/ri"

interface ProfileInfoProps {
    name: userInfoType;
    secondName: userInfoType;
    money: userInfoType;
    gamesPlayed: userInfoType;
    gamesWon: userInfoType;
}


export const Progress: React.FC<ProfileInfoProps> = ({ name, secondName, money, gamesPlayed, gamesWon }) => {

    const userProgress = [
        { id: 1, type: "Žaista žaidimų", progress: gamesPlayed },
        { id: 2, type: "Laimėta žaidimų", progress: gamesWon },
    ]
    return (
        <div>
            <div className={styles.ProgressDetail}>
                <h1>{name} {secondName}</h1>
                <div>
                    <RiMoneyEuroCircleFill />
                    <p>Pinigai:</p>
                    <h2>{money}</h2>
                </div>
            </div>
            <div className={styles.ProgressList}>
                {userProgress.map(progress => {
                    return <ProgressInfo key={progress.id} progressInfo={progress} />
                })}
            </div>
        </div>
    )
}
