import React from 'react';
import { NotFound } from '../NotFound/NotFound';
import { ProfileTitle } from '../Title/ProfileTitle'

const gameHistories: {} = [];

export const GameHistory: React.FC = () => {
    const title = "Žaidimų istorijos";
    return (
        <>
            <ProfileTitle>{title}</ProfileTitle>
            {gameHistories == 0 ? <NotFound nameOfPage={title} /> : null}
        </>
    )
}