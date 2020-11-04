import React from 'react'
import styles from '../components/Login/Login.module.scss'
import { Button } from '../components/UI/Button/Button'
import { Input } from '../components/UI/Inputs/Input'

export const Login: React.FC = () => {

    const handleUserInput = () => {

    }
    return (
        <div className={styles.LoginLayout}>
            <div className={styles.Login}>
                <h3>Prisijungimas</h3>
                <Input type="email" name="loginEmail" handleUserInput={handleUserInput} placeholder="Elektroninis paštas" />
                <Input type="text" name="loginPassword" handleUserInput={handleUserInput} placeholder="Slaptažodis" />
                <h4><span>Pamiršai slaptažodį?</span></h4>
                <Button btnClass='ButtonBlue' path='/home' >Prisijungti</Button>
                <h5>Neturi paskyros? <span>Registruotis</span></h5>
            </div>
        </div>
    )
}
