import React from 'react'
import { MdEdit } from 'react-icons/md';
import styles from "./ProfileDetails.module.scss"

interface ProfileDetailsProps {
    userInfo: any;
}

export const ProfileDetails: React.FC<ProfileDetailsProps> = ({ userInfo }) => {
    const { type, value } = userInfo;
    return (
        <div className={styles.Details}>
            <h4>{type}:</h4>
            <div className={styles.DetailsEdit}>
                <p>{value}</p>
                <MdEdit />
            </div>
        </div>
    )
}
