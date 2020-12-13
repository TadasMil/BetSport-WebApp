import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from "../axios/axios"
import { setDisplaySnackbar } from '../store/actions/snackbarAction';
import { removeUser, storeUser } from '../store/actions/userAction';
import { RootState } from '../store/reducers';
import { BackEndPoints } from './BackEndPoints';

export const AuthWrapper: React.FC = ({ children }) => {

    const authToken = useSelector((state: RootState) => {
        return state.user.user?.accessToken;
    })
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(BackEndPoints.getUserDetails, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
            .then(res => {
                const user = { ...res.data.response.user, accessToken: authToken };
                dispatch(storeUser(user))
            })
            .catch(err => {
                console.log(err.response.data);
                dispatch(removeUser());
                dispatch(setDisplaySnackbar(err.response.data));
            })
    }, [])

    if (!authToken) return <Redirect to="/" />

    return (
        <>
            {children}
        </>
    )
}
