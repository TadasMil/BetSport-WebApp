import React, { useState, useEffect } from 'react'
import { Button } from '../UI/Button/Button';
import { requiredValidationCheck, passwordValidation } from '../../utilities/Validator'
import { ModalOptions } from '../../enums/ModalOptions'
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { WrongDetailsMessage } from '../UI/ErrorHandlings/WrongDetailsMessage';
import { storeAuthToken } from '../../store/actions/storeAuthToke';
import Input from '../UI/Inputs/Input'
import axios from '../../axios/axios'
import { IoMdClose } from 'react-icons/io'
import { BackEndPoints } from '../../utilities/BackEndPoints';
import styles from './Login.module.scss'

interface LoginProps {
    handleToggleLogin: (selectedModal: ModalOptions) => void;
}

export interface UserData {
    email: string;
    password: string;
}

export const Login: React.FC<LoginProps> = ({ handleToggleLogin }) => {
    const { register, handleSubmit, errors } = useForm<UserData>();
    const [wrongDetailsError, setWrongDetails] = useState<string>("");
    const dispatch = useDispatch();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setWrongDetails("")
        }, 3000)
        return () => {
            clearInterval(timeout);
        }
    }, [wrongDetailsError])

    const formSubmit = handleSubmit(({ email, password }) => {
        axios.post(BackEndPoints.loginUser, { email, password })
            .then(response => {
                dispatch(storeAuthToken(response.data.accessToken));
                handleToggleLogin(ModalOptions.None);
                setWrongDetails("");
            })
            .catch(error => {
                setWrongDetails(error.response.data.error.message);
            })
    })

    return (
        <div className={styles.LoginLayout}>
            <div className={styles.Login}>
                <IoMdClose className={styles.Icon} onClick={() => handleToggleLogin(ModalOptions.None)}></IoMdClose>
                <form onSubmit={formSubmit}>
                    <h3>Prisijungimas</h3>
                    <Input type="email" name="email" ref={register} required={requiredValidationCheck("Elektroninis paštas")} placeholder="Elektroninis paštas" errorDisplay={errors.email} />
                    <Input type="password" name="password" ref={register} required={passwordValidation} placeholder="Slaptažodis" errorDisplay={errors.password} />
                    <WrongDetailsMessage wrongDetailsMessage={wrongDetailsError} />
                    <h4><span>Pamiršai slaptažodį?</span></h4>
                    <Button btnClass='ButtonBlue'>Prisijungti</Button>
                    <h5>Neturi paskyros? <span onClick={() => handleToggleLogin(ModalOptions.Register)}>Registruotis</span></h5>
                </form>
            </div>
        </div>
    )
};
