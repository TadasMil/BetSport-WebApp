import React from 'react'
import { faInstagram, faFacebookMessenger, faFacebook, faTwitter, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./SocialMedia.module.scss"

export interface ISocialIcon {
    id: number,
    icon: IconDefinition
}

const socialIcons = [
    { id: 1, icon: faInstagram },
    { id: 2, icon: faFacebookMessenger },
    { id: 3, icon: faFacebook },
    { id: 4, icon: faTwitter },
]

export const SocialMedia: React.FC = () => {
    return (
        <div className={styles.SocialMedia}>
            {socialIcons.map(icon => {
                return <span key={icon.id}><FontAwesomeIcon icon={icon.icon} /></span>
            })}
        </div>
    )
}
