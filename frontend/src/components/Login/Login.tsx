import React from 'react'
import { Button } from '../UI/Button/Button'
import { Input } from '../UI/Inputs/Input'
import { IoMdClose } from 'react-icons/io'
import { ModalOptions } from '../../enums/ModalOptions'
import styles from './Login.module.scss'

interface LoginProps {
    handleToggleLogin: (selectedModal: ModalOptions) => void;
}

export const Login: React.FC<LoginProps> = ({ handleToggleLogin }) => {

    return (
        <div className={styles.LoginLayout}>
            <div className={styles.Login}>
                <IoMdClose className={styles.Icon} onClick={() => handleToggleLogin(ModalOptions.None)}></IoMdClose>
                <h3>Prisijungimas</h3>
                <Input type="email" name="loginEmail" placeholder="Elektroninis paštas" />
                <Input type="text" name="loginPassword" placeholder="Slaptažodis" />
                <h4><span>Pamiršai slaptažodį?</span></h4>
                <Button btnClass='ButtonBlue' path='/home'>Prisijungti</Button>
                <h5>Neturi paskyros? <span onClick={() => handleToggleLogin(ModalOptions.Register)}>Registruotis</span></h5>
            </div>
        </div>
    )
}
