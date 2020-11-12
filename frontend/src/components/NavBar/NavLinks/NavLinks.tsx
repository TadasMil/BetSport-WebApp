import React from 'react'
import { LinkButton } from '../../UI/Button/LinkButton'
import { ModalOptions } from '../../../enums/ModalOptions'
import { useSelector } from 'react-redux';
import { LoginToggle } from '../../UI/Button/ModalToggle/LoginToggle'
import { RootState } from '../../../store/reducers';
import { ProfileBar } from '../../Profile/ProfileBar';
import styles from './NavLinks.module.scss'

interface NavLinksProps {
    invokeLoginLayout: (selectedModal: ModalOptions) => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ invokeLoginLayout }) => {
    const userToken = useSelector((state: RootState) => {
        return state.auth.auth;
    })

    return (
        <div className={styles.NavLinks}>
            <div className={styles.Links}>
                <LinkButton btnClass='ButtonLink' path='/' >Pradinis</LinkButton>
                <LinkButton btnClass='ButtonLink' path='/about' >Apie mus</LinkButton>
                <LinkButton btnClass='ButtonLink' path='/about' >Kontaktai</LinkButton>
                <LinkButton btnClass='ButtonLink' path='/games' >Žaidimai</LinkButton>
            </div>
            <div>
                {
                    !userToken ?
                        <>
                            <LoginToggle btnClass='ButtonGrey' invokeLoginLayout={invokeLoginLayout} modalType={ModalOptions.Login}>Prisijungti</LoginToggle>
                            <LoginToggle btnClass='ButtonBlue' invokeLoginLayout={invokeLoginLayout} modalType={ModalOptions.Register}>Registruotis</LoginToggle>
                        </>
                        :
                        <>
                            <ProfileBar />
                        </>
                }
            </div>
        </div>
    )
}
