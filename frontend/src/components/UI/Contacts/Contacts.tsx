import React from 'react'
import { Contact } from './Contact'
import { faMobileAlt, faEnvelope, faQuestion, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import styles from "./Contacts.module.scss"


export interface IContacts {
    id: number,
    text: string,
    data: string,
    icon: IconDefinition
}

const contactsData: IContacts[] = [
    { id: 1, text: "Skambinkite", data: "+3706849500", icon: faMobileAlt },
    { id: 2, text: "Rašykite", data: "pagalba@betsport.lt", icon: faEnvelope },
    { id: 3, text: "Klausimai", data: "D.U.K", icon: faQuestion }
]

export const Contacts: React.FC = () => {
    return (
        <>
            <div className={styles.ContactBorders}>
                <div className={styles.ContactArea}>
                    <h2>BetSport pagalba</h2>
                    <div className={styles.ListOfContacts}>
                        {contactsData.map(item => {
                            return <Contact key={item.id} contactData={item} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
