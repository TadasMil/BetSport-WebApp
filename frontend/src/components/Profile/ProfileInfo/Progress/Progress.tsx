import React from 'react'
import { userInfoType } from '../../../../pages/Profile'
import { ProgressInfo } from './ProgressInfo'
import { RiMoneyEuroCircleFill } from "react-icons/ri"
import { faTrophy, faDice, faAngry, faChartLine } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProgressDetail.module.scss"


interface ProfileInfoProps {
    name: userInfoType;
    secondName: userInfoType;
    money: userInfoType;
    gamesPlayed: userInfoType;
    gamesWon: userInfoType;
    moneyLost: userInfoType;
    moneyWon: userInfoType;
}


export const Progress: React.FC<ProfileInfoProps> = ({ name, secondName, money, gamesPlayed, gamesWon, moneyLost, moneyWon }) => {

    const userProgress = [
        { id: 1, type: "Žaista žaidimų", progress: gamesPlayed, icon: faDice },
        { id: 2, type: "Laimėta žaidimų", progress: gamesWon, icon: faTrophy },
        { id: 3, type: "Pralošta pinigų", progress: moneyLost, icon: faAngry },
        { id: 4, type: "Laimėta pinigų", progress: moneyWon, icon: faChartLine },
    ]
    return (
        <div>
            <div className={styles.ProgressDetail}>
                <h1>{name} {secondName}</h1>
                <div>
                    <p>Pinigai:</p>
                    <h2>{money}</h2>
                    <RiMoneyEuroCircleFill />
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
