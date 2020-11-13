import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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
import { Button } from '../UI/Button/Button';

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

    const formSubmit = handleSubmit(({ email, password }) => {
        axios.post('login', { email, password })
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
                    <Input type="email" name="email" ref={register} required={requiredValidation} placeholder="Elektroninis paštas" errorDisplay={errors.email} />
                    <Input type="password" name="password" ref={register} required={passwordValidation} placeholder="Slaptažodis" errorDisplay={errors.password} />
                    <WrongDetails wrongDetailsMessage={wrongDetailsError} />
                    <h4><span>Pamiršai slaptažodį?</span></h4>
                    <Button btnClass='ButtonBlue'>Prisijungti</Button>
                    <h5>Neturi paskyros? <span onClick={() => handleToggleLogin(ModalOptions.Register)}>Registruotis</span></h5>
                </form>
            </div>
        </div>
    )
}
