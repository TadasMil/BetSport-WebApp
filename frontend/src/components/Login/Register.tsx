import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Input from '../UI/Inputs/Input'
import { ModalOptions } from '../../enums/ModalOptions'
import { requiredValidation, passwordValidation, nameValidation, lastNameValidation } from '../../utilities/Validator'
import styles from './Login.module.scss'
import { useForm } from 'react-hook-form'
import { Button } from '../UI/Button/Button'

interface RegisterProps {
    handleToggleLogin: (selectedModal: ModalOptions) => void;
}

interface UserData {
    firstName: string;
    secondName: string;
    email: string;
    password: string;
}

export const Register: React.FC<RegisterProps> = ({ handleToggleLogin }) => {
    const { register, handleSubmit, errors } = useForm<UserData>();

    const formSubmit = handleSubmit(({ email, firstName, secondName, password }) => {
        console.log(email, firstName, secondName, password)
    })

    return (
        <div className={styles.LoginLayout}>
            <div className={styles.Login}>
                <IoMdClose className={styles.Icon} onClick={() => handleToggleLogin(ModalOptions.None)}></IoMdClose>
                <form onSubmit={formSubmit}>
                    <h3>Registracija</h3>
                    <Input type="email" name="email" ref={register} required={requiredValidation} placeholder="Elektroninis paštas" errorDisplay={errors.email} />
                    <Input type="text" name="firstName" ref={register} required={nameValidation} placeholder="Vardas" errorDisplay={errors.firstName} />
                    <Input type="text" name="secondName" ref={register} required={lastNameValidation} placeholder="Pavardė" errorDisplay={errors.secondName} />
                    <Input type="password" name="password" ref={register} required={passwordValidation} placeholder="Slaptažodis" errorDisplay={errors.password} />
                    <Button btnClass='ButtonBlue'>Registruotis</Button>
                    <h5>Turi egzistuojančią paskyrą? <span onClick={() => handleToggleLogin(ModalOptions.Login)}>Prisijunkti</span></h5>
                </form>
            </div>
        </div>
    )
}
