import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from "../axios/axios"
import { setDisplaySnackbar } from '../store/actions/snackbarAction';
import { removeUser } from '../store/actions/userAction';
import { RootState } from '../store/reducers';
import { BackEndPoints } from './BackEndPoints';

export const AuthWrapper: React.FC = ({ children }) => {

    const authToken = useSelector((state: RootState) => {
        return state.user.user?.accessToken;
    })
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(BackEndPoints.highestGameWinners, {
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
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
