import React, { useState } from 'react'
import { Button } from '../UI/Button/Button'
import Input from '../UI/Inputs/Input'
import { ModalOptions } from '../../enums/ModalOptions'
import { requiredValidationCheck, passwordValidation } from '../../utilities/Validator'
import { WrongDetailsMessage } from '../UI/ErrorHandlings/WrongDetailsMessage';
import { useForm } from 'react-hook-form'
import axios from '../../axios/axios'
import { IoMdClose } from 'react-icons/io'
import { BackEndPoints } from '../../utilities/BackEndPoints'
import styles from './Login.module.scss'
import { useDispatch } from 'react-redux'
import { setDisplaySnackbar } from '../../store/actions/snackbarAction'

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
    const [wrongRegisterDetails, setWrongRegisterDetails] = useState<string>("");

    const dispatch = useDispatch();

    const formSubmit = handleSubmit(({ email, firstName, secondName, password }) => {
        axios.post(BackEndPoints.registerUser, { email, firstName, secondName, password })
            .then(response => {
                console.log(response.data.message)
                dispatch(setDisplaySnackbar(response.data.message))
                handleToggleLogin(ModalOptions.Login);
            })
            .catch(error => {
                setWrongRegisterDetails(error.response.data.message);
            });
    });

    return (
        <div className={styles.LoginLayout}>
            <div className={styles.Login}>
                <IoMdClose className={styles.Icon} onClick={() => handleToggleLogin(ModalOptions.None)}></IoMdClose>
                <form onSubmit={formSubmit}>
                    <h3>Registracija</h3>
                    <Input type="email" name="email" ref={register} required={requiredValidationCheck("Elektroninis paštas")} placeholder="Elektroninis paštas" errorDisplay={errors.email} />
                    <Input type="text" name="firstName" ref={register} required={requiredValidationCheck("Vardas")} placeholder="Vardas" errorDisplay={errors.firstName} />
                    <Input type="text" name="secondName" ref={register} required={requiredValidationCheck("Pavardė")} placeholder="Pavardė" errorDisplay={errors.secondName} />
                    <Input type="password" name="password" ref={register} required={passwordValidation} placeholder="Slaptažodis" errorDisplay={errors.password} />
                    <WrongDetailsMessage wrongDetailsMessage={wrongRegisterDetails} />
                    <Button btnClass='ButtonBlue'>Registruotis</Button>
                    <h5>Turi egzistuojančią paskyrą? <span onClick={() => handleToggleLogin(ModalOptions.Login)}>Prisijunkti</span></h5>
                </form>
            </div>
        </div>
    )
}
