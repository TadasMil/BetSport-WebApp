import React, { useEffect, useState } from 'react'
import { Link } from '../../UI/Button/Link'
import { ModalOptions } from '../../../enums/ModalOptions'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../UI/Button/Button'
import { RootState } from '../../../store/reducers';
import { ProfileBar } from '../../Profile/ProfileBar';
import { removeUser } from '../../../store/actions/userAction';
import { GiHamburgerMenu } from "react-icons/gi"
import useWindowDimensions from '../../../utilities/WindowsDimensions';
import styles from './NavLinks.module.scss'
import { Icon } from '../../UI/Icon/Icon';
import { IProfileSubRoutes, profileSubRoutes } from '../../../pages/Profile';
import { MoneyDisplay } from '../../UI/MoneyDisplay/MoneyDisplay';

interface NavLinksProps {
    invokeLoginLayout: (selectedModal: ModalOptions) => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ invokeLoginLayout }) => {
    const [mobileView, setMobileView] = useState<boolean>(false);
    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState<boolean>(false);
    const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width <= 800) {
            return setMobileView(true);
        }

        setMobileView(false);
    }, [width])

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

    const navBarForSmallDevices = () => {
        return (
            <>
                <div className={styles.Mobile}>
                    <div className={styles.MobileHamburger}>
                        <MoneyDisplay money={userToken.money!} />
                        <Button btnClass="Hamburger" onClick={() => setIsDropdownDisplayed(state => !state)}>
                            <Icon styling="HamburgerIcon">
                                <GiHamburgerMenu />
                            </Icon>
                        </Button>
                    </div>

                    {
                        <div className={`${styles.MobileElements} ${isDropdownDisplayed && styles['MobileElements-active']}`}>
                            {
                                userToken ?
                                    <div className={styles.MobileNavForAuthorized}>
                                        <Link btnClass='MenuSettingsButton-mobile' path='/' onInteractive={() => setIsDropdownDisplayed(state => !state)}>Pradinis</Link>
                                        <Link btnClass='MenuSettingsButton-mobile' path='/games' onInteractive={() => setIsDropdownDisplayed(state => !state)}>Žaidimai</Link>
                                        {
                                            profileSubRoutes.map((route: IProfileSubRoutes) => {
                                                return <Link btnClass="MenuSettingsButton-mobile" path={`/profile${route.path}`} onInteractive={() => setIsDropdownDisplayed(state => !state)}>{route.name}</Link>
                                            })
                                        }
                                    </div>
                                    :
                                    <>
                                        <Link btnClass='ButtonLink' path='/' >Pradinis</Link>
                                        <Link btnClass='ButtonLink' path='/games' >Žaidimai</Link>
                                        <Button btnClass='ButtonGrey' onClick={() => invokeLoginLayout(ModalOptions.Login)}>Prisijungti</Button>
                                        <Button btnClass='ButtonBlue' onClick={() => invokeLoginLayout(ModalOptions.Register)}>Registruotis</Button>
                                    </>
                            }
                        </div>
                    }
                </div>
            </>
        );
    }

    if (mobileView) {
        return navBarForSmallDevices();
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
                            <ProfileBar money={userToken.money!} mobileView={mobileView} isDropdownVisible={isDropdownVisible} removeCurrentUser={removeCurrentUser} />
                        </>
                }
            </div>
        </div>
    )
}
