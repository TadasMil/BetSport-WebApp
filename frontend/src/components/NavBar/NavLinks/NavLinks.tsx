import React from 'react'
import { Button } from '../../UI/Button/Button'
import { ModalOptions } from '../../../enums/ModalOptions'
import { LoginToggle } from '../../UI/Button/ModalToggle/LoginToggle'
import styles from './NavLinks.module.scss'

interface NavLinksProps {
    invokeLoginLayout: (selectedModal: ModalOptions) => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ invokeLoginLayout }) => {
    return (
        <div className={styles.NavLinks}>
            <div className={styles.Links}>
                <Button btnClass='ButtonLink' path='/' >Pradinis</Button>
                <Button btnClass='ButtonLink' path='/about' >Apie mus</Button>
                <Button btnClass='ButtonLink' path='/about' >Kontaktai</Button>
                <Button btnClass='ButtonLink' path='/games' >Žaidimai</Button>
            </div>
            <div>
                <LoginToggle btnClass='ButtonGrey' invokeLoginLayout={invokeLoginLayout} modalType={ModalOptions.Login}>Prisijungti</LoginToggle>
                <LoginToggle btnClass='ButtonBlue' invokeLoginLayout={invokeLoginLayout} modalType={ModalOptions.Register}>Registruotis</LoginToggle>
            </div>
        </div>
    )
}
