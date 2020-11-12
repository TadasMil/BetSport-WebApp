import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LoginButton } from '../UI/Button/LoginButton/LoginButton'
import { ModalOptions } from '../../enums/ModalOptions'
import { useForm } from "react-hook-form";
import { requiredValidation, passwordValidation } from '../../utilities/Validator'
import { IoMdClose } from 'react-icons/io'
import { WrongDetails } from '../UI/ErrorHandlings/WrongDetails';
import { storeAuthToken } from '../../store/actions/storeAuthToke';
import { RootState } from '../../store/reducers';
import Input from '../UI/Inputs/Input'
import axios from '../../axios/axios'
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
    const [wrongDetails, setWrongDetails] = useState<boolean>(false);
    const dispatch = useDispatch();

    const formSubmit = handleSubmit(({ email, password }) => {
        axios.post('login', { email, password })
            .then(response => {
                console.log(response);
                dispatch(storeAuthToken(response.data.accessToken));
                handleToggleLogin(ModalOptions.None);
                setWrongDetails(false);

            })
            .catch(error => {
                console.log(error);
                setWrongDetails(true);
            })
    })

    return (
        <div className={styles.LoginLayout}>
            <div className={styles.Login}>
                <IoMdClose className={styles.Icon} onClick={() => handleToggleLogin(ModalOptions.None)}></IoMdClose>
                <form onSubmit={formSubmit}>
                    <h3>Prisijungimas</h3>
                    <Input type="email" name="email" ref={register} required={requiredValidation} placeholder="Elektroninis paštas" errorDisplay={errors.email} />
                    <Input type="password" name="password" ref={register} required={passwordValidation} placeholder="Slaptažodis" errorDisplay={errors.password} />
                    <WrongDetails wrongDetails={wrongDetails} />
                    <h4><span>Pamiršai slaptažodį?</span></h4>
                    <LoginButton btnClass='ButtonBlue'>Prisijungti</LoginButton>
                    <h5>Neturi paskyros? <span onClick={() => handleToggleLogin(ModalOptions.Register)}>Registruotis</span></h5>
                </form>
            </div>
        </div>
    )
}
