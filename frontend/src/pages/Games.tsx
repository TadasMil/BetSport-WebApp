import React from 'react'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';


export const Games = () => {
    const isUserActive = useSelector((state: RootState) => {
        return state.user.user?.accessToken
    })

    if (!isUserActive) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <div>games</div>
        </div>
    )
}
