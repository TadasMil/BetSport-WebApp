import React from 'react'
import { Link } from '../../UI/Button/Link'
import { ModalOptions } from '../../../enums/ModalOptions'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../UI/Button/Button'
import { RootState } from '../../../store/reducers';
import { ProfileBar } from '../../Profile/ProfileBar';
import { removeAuthToken } from '../../../store/actions/storeAuthToke';
import styles from './NavLinks.module.scss'

interface NavLinksProps {
    invokeLoginLayout: (selectedModal: ModalOptions) => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ invokeLoginLayout }) => {
    const userToken = useSelector((state: RootState) => {
        return state.auth.auth;
    })
    const dispatch = useDispatch();

    const removeCurrentUser = (): void => {
        dispatch(removeAuthToken());
    }

    return (
        <div className={styles.NavLinks}>
            <div className={styles.Links}>
                <Link btnClass='ButtonLink' path='/' >Pradinis</Link>
                <Link btnClass='ButtonLink' path='/about' >Apie mus</Link>
                <Link btnClass='ButtonLink' path='/about' >Kontaktai</Link>
                <Link btnClass='ButtonLink' path='/games' >Žaidimai</Link>
            </div>
            <div>
                {
                    !userToken ?
                        <>
                            <Button btnClass='ButtonGrey' onClick={() => invokeLoginLayout(ModalOptions.Login)}>Prisijungti</Button>
                            <Button btnClass='ButtonBlue' onClick={() => invokeLoginLayout(ModalOptions.Register)}>Registruotis</Button>
                        </>
                        :
                        <>
                            <ProfileBar removeCurrentUser={removeCurrentUser} />
                        </>
                }
            </div>
        </div>
    )
}
