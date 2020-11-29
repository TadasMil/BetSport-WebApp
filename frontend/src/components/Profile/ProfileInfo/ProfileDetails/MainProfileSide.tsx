import React from 'react'
import profileImg from "../../../../assets/Images/profileImage.png"
import { userInfoType } from '../../../../pages/Profile'
import styles from "./MainProfileSide.module.scss"
import { ProfileDetails } from './ProfileDetails'

interface MainProfileProps {
    name: userInfoType;
    secondName: userInfoType;
    email: userInfoType;
}

export const MainProfileSide: React.FC<MainProfileProps> = ({ name, secondName, email }) => {
    const userDetails = [
        { id: 1, type: "Vardas", value: name },
        { id: 2, type: "Pavardė", value: secondName },
        { id: 3, type: "E. paštas", value: email },
    ]

    return (
        <div className={styles.MainProfile}>
            <img src={profileImg} alt="profile" />
            {/* <div className={styles.ProfileDetails}>
                {userDetails.map(info => {
                    return <ProfileDetails key={info.id} userInfo={info} />
                })}
            </div> */}
        </div>
    )
}
