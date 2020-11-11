import React, { useState } from 'react'
import { Login } from '../Login/Login'
import { Register } from '../Login/Register'
import { NavImage } from './NavImage/NavImage'
import { NavLinks } from './NavLinks/NavLinks'
import { ModalOptions } from '../../enums/ModalOptions'
import styles from './NavBar.module.scss'

export const NavBar: React.FC = () => {
    const [toggleLogin, setToggleLogin] = useState<ModalOptions>(ModalOptions.None)

    const handleToggleLogin = (selectedModal: ModalOptions): void => {
        setToggleLogin(selectedModal);
    }

    return (
        <>
            {toggleLogin === ModalOptions.Login && <Login handleToggleLogin={handleToggleLogin} />}
            {toggleLogin === ModalOptions.Register && <Register handleToggleLogin={handleToggleLogin} />}
            <div className={styles.NavBar}>
                <NavImage />
                <NavLinks invokeLoginLayout={handleToggleLogin} />
            </div>
        </>
    )
}
