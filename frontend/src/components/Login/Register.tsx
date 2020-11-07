import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { Button } from '../UI/Button/Button'
import { Input } from '../UI/Inputs/Input'
import { ModalOptions } from '../../enums/ModalOptions'
import styles from './Login.module.scss'

interface RegisterProps {
    handleToggleLogin: (selectedModal: ModalOptions) => void;
}

export const Register: React.FC<RegisterProps> = ({ handleToggleLogin }) => {
    return (
        <div className={styles.LoginLayout}>
            <div className={styles.Login}>
                <IoMdClose className={styles.Icon} onClick={() => handleToggleLogin(ModalOptions.None)}></IoMdClose>
                <h3>Registracija</h3>
                <Input type="email" name="loginEmail" placeholder="Elektroninis paštas" />
                <Input type="text" name="name" placeholder="Vardas" />
                <Input type="text" name="surrname" placeholder="Pavardė" />
                <Input type="password" name="loginPassword" placeholder="Slaptažodis" />
                <Button btnClass='ButtonBlue' path='/home'>Registruotis</Button>
                <h5>Turi egzistuojančią paskyrą? <span onClick={() => handleToggleLogin(ModalOptions.Login)}>Prisijunkti</span></h5>
            </div>
        </div>
    )
}
