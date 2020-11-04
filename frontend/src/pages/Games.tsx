import React from 'react'
import { Redirect } from 'react-router-dom';

export const Games = () => {
    const isLogged = false;

    if (!isLogged) {
        return <Redirect to='/login' />
    }

    return (
        <div>
            <div>games</div>
        </div>
    )
}
