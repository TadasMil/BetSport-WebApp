import React from 'react'
import { IContacts } from './Contacts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Contacts.module.scss"

interface ContactProps {
    contactData: IContacts
}

export const Contact: React.FC<ContactProps> = ({ contactData }) => {
    const { text, data, icon } = contactData;
    return (
        <div className={styles.Contact}>
            <div className={styles.Icon}><span><FontAwesomeIcon icon={icon} /></span></div>
            <div className={styles.ContactInfo}>
                <h3>{text}</h3>
                <p>{data}</p>
            </div>
        </div>
    )
}
