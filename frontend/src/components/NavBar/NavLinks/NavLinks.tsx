import React from 'react'
import { Button } from '../../UI/Button/Button'
import styles from './NavLinks.module.scss'

export const NavLinks: React.FC = () => {
    return (
        <div className={styles.NavLinks}>
            <div className={styles.Links}>
                <Button btnClass='ButtonLink' path='/' >Pradinis</Button>
                <Button btnClass='ButtonLink' path='/about' >Apie mus</Button>
                <Button btnClass='ButtonLink' path='/about' >Kontaktai</Button>
                <Button btnClass='ButtonLink' path='/games' >Žaidimai</Button>
            </div>
            <div>
                <Button btnClass='ButtonGrey' path='/login' >Prisijungti</Button>
                <Button btnClass='ButtonBlue' path='/about' >Registruotis</Button>
            </div>
        </div >
    )
}
