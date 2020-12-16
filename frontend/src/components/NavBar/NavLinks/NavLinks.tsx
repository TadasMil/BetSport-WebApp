import React, { useEffect, useState } from 'react'
import { Link } from '../../UI/Button/Link'
import { ModalOptions } from '../../../enums/ModalOptions'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../UI/Button/Button'
import { RootState } from '../../../store/reducers';
import { ProfileBar } from '../../Profile/ProfileBar';
import { removeUser } from '../../../store/actions/userAction';
import styles from './NavLinks.module.scss'
import useWindowDimensions from '../../../utilities/WindowsDimensions';

interface NavLinksProps {
    invokeLoginLayout: (selectedModal: ModalOptions) => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ invokeLoginLayout }) => {
    const [mobileView, setMobileView] = useState<boolean>(false);
    const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width <= 800) {
            return setMobileView(true);
        }

        setMobileView(false);
    }, [width])

    console.log(mobileView);
    const userToken = useSelector((state: RootState) => {
        return {
            token: state.user.user?.accessToken,
            money: state.user.user?.score
        }
    })

    const dispatch = useDispatch();

    const removeCurrentUser = (): void => {
        dispatch(removeUser());
    }

    return (
        <div className={styles.NavLinks}>
            <div className={styles.Links}>
                <Link btnClass='ButtonLink' path='/' >Pradinis</Link>
                <Link btnClass='ButtonLink' path='/games' >Žaidimai</Link>
            </div>
            <div>
                {
                    !userToken.token ?
                        <>
                            <Button btnClass='ButtonGrey' onClick={() => invokeLoginLayout(ModalOptions.Login)}>Prisijungti</Button>
                            <Button btnClass='ButtonBlue' onClick={() => invokeLoginLayout(ModalOptions.Register)}>Registruotis</Button>
                        </>
                        :
                        <>
                            <ProfileBar money={userToken.money} mobileView={mobileView} isDropdownVisible={isDropdownVisible} removeCurrentUser={removeCurrentUser} />
                        </>
                }
            </div>
        </div>
    )
}
