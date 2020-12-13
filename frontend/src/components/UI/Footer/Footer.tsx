import React from 'react'
import { Contacts } from '../Contacts/Contacts'
import { License } from '../Contacts/License/License'
import { SocialMedia } from '../Contacts/SocialMedia/SocialMedia'
import styles from "./Footer.module.scss"

export const Footer: React.FC = () => {
    return (
        <footer className={styles.Footer}>
            <Contacts />
            <div className={styles.FooterSocialLicense}>
                <SocialMedia />
                <License />
            </div>
        </footer>
    )
}
